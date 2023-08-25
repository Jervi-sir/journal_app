import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

const db = SQLite.openDatabase('articles.db');

/*----------------------------------------------------------------
  initializeDB();
----------------------------------------------------------------*/
export const initializeDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS bookmarked_articles (id INTEGER PRIMARY KEY NOT NULL, data TEXT, added_at TEXT);'
    );
  });
};

/*----------------------------------------------------------------
  deleteTable();
----------------------------------------------------------------*/
export const deleteTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'DROP TABLE IF EXISTS bookmarked_articles;',
      [],
      () => {
        console.log('Table deleted successfully.');
      },
      (_, error) => {
        console.log('SQL Error: ' + error);
      }
    );
  });
};


/*----------------------------------------------------------------
  countBookmarkedArticles((total) => {
    console.log(`Total number of bookmarked articles: ${total}`);
  });
----------------------------------------------------------------*/
export const countBookmarkedArticles = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT COUNT(*) as total FROM bookmarked_articles;',
      [],
      (_, { rows: { _array } }) => {
        const total = _array[0].total;
        callback(total);
      },
      (_, error) => {
        console.log('SQL Error: ' + error);
      }
    );
  });
};


/*----------------------------------------------------------------
  bookmarkArticle(articleId, articleData);
----------------------------------------------------------------*/
export const bookmarkArticle = async (articleId, articleData) => {
  const { thumbnail, author_pic } = articleData;
  const thumbnailFilename = thumbnail.split('/').pop();
  const authorPicFilename = author_pic.split('/').pop();
  const localThumbnailUri = `${FileSystem.documentDirectory}${thumbnailFilename}`;
  //const localAuthorPicUri = `${FileSystem.documentDirectory}${authorPicFilename}`;
  // Download images and save locally
  await FileSystem.downloadAsync(thumbnail, localThumbnailUri);
  //await FileSystem.downloadAsync(author_pic, localAuthorPicUri);
  
  db.transaction(tx => {
    tx.executeSql(
      'INSERT OR REPLACE INTO bookmarked_articles (id, added_at, data) VALUES (?, ?, ?);',
      [
        articleId,
        new Date().toISOString(),
        JSON.stringify({
          "id": articleData.id,
          "author_bio": articleData.author_bio,
          "author_name": articleData.author_name,
          "author_pic": null,
          "author_slug": articleData.author_slug,
          "category": articleData.category,
          "content": articleData.content,
          "created_at": articleData.created_at,
          "duration": articleData.duration,
          "likes": articleData.likes,
          "nb_comments": articleData.nb_comments,
          "recap": articleData.recap,
          "slug": articleData.slug,
          "tags": JSON.stringify(articleData.tags),
          "thumbnail": localThumbnailUri,
          "title": articleData.title,
          "uploaded_since": articleData.uploaded_since
        })],
      (_, { rowsAffected }) => {
        if (rowsAffected > 0) {
          console.log('Successfully bookmarked the article');
        }
      },
      (_, error) => {
        console.log('SQL Error: ' + error);
      }
    );
  });
};

/*----------------------------------------------------------------
  getAllBookmarkedArticles((articles) => {
    console.log('Bookmarked articles:', articles[0].data);
  });
----------------------------------------------------------------*/
export const getAllBookmarkedArticles = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM bookmarked_articles;',
      [],
      (_, { rows: { _array } }) => {
        const articles = _array.map(item => ({
          id: item.id,
          data: JSON.parse(item.data),
        }));
        callback(articles);
      },
      (_, error) => {
        console.log('SQL Error: ' + error);
      }
    );
  });
};


/*----------------------------------------------------------------
  const articleId = 1;  // Replace this with the article ID you want to check
  doesArticleExist(articleId, (exists) => {
    if (exists) {
      console.log(`Article with ID ${articleId} already exists.`);
    } else {
      console.log(`Article with ID ${articleId} does not exist.`);
    }
  });
----------------------------------------------------------------*/
export const doesArticleExist = (articleId, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM bookmarked_articles WHERE id = ?;',
      [articleId],
      (_, { rows: { _array } }) => {
        if (_array.length > 0) {
          callback(true);
        } else {
          callback(false);
        }
      },
      (_, error) => {
        console.log('SQL Error: ' + error);
      }
    );
  });
};

/*----------------------------------------------------------------
const articleId = 1; // Replace with the article's ID that you want to remove

removeBookmarkedArticle(articleId, (isRemoved) => {
  if (isRemoved) {
    console.log(`Successfully removed the article with ID ${articleId}.`);
  } else {
    console.log(`No article found with ID ${articleId}.`);
  }
});
----------------------------------------------------------------*/
export const showTableStructure = () => {
  db.transaction(tx => {
    tx.executeSql(
      'PRAGMA table_info(bookmarked_articles);',
      [],
      (_, { rows: { _array } }) => {
        console.log('Table Structure:', _array);
      },
      (_, error) => {
        console.log('SQL Error: ' + error);
      }
    );
  });
};



/*----------------------------------------------------------------
  showTableStructure();
----------------------------------------------------------------*/
export const removeBookmarkedArticle = (articleId, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM bookmarked_articles WHERE id = ?;',
      [articleId],
      (_, { rowsAffected }) => {
        if (rowsAffected > 0) {
          callback(true);  // Successfully removed
        } else {
          callback(false); // No article found to remove
        }
      },
      (_, error) => {
        console.log('SQL Error: ' + error);
      }
    );
  });
};