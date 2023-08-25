import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

const db = SQLite.openDatabase('articles.db');

export const printAllArticles = () => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM bookmarks ', [], (_, { rows }) => {
      console.log(rows._array);
    });
  });
};


export const bookmarkArticle = ({ articlesData }) => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS bookmarks  (
          article_id INTEGER PRIMARY KEY NOT NULL,
          author_bio TEXT, author_name TEXT, author_pic TEXT, author_slug TEXT,
          category TEXT, content TEXT, created_at TEXT, duration TEXT,
          likes INTEGER, nb_comments INTEGER, recap TEXT, slug TEXT,
          tags TEXT, thumbnail TEXT, title TEXT, uploaded_since TEXT,
          added_at TEXT
       );`
    );
  });

  db.transaction(tx => {
    articlesData.forEach(async (article) => {
      const { thumbnail, author_pic } = article;
      const thumbnailFilename = thumbnail.split('/').pop();
      const authorPicFilename = author_pic.split('/').pop();

      const localThumbnailUri = `${FileSystem.documentDirectory}${thumbnailFilename}`;
      const localAuthorPicUri = `${FileSystem.documentDirectory}${authorPicFilename}`;

      // Download images and save locally
      await FileSystem.downloadAsync(thumbnail, localThumbnailUri);
      await FileSystem.downloadAsync(author_pic, localAuthorPicUri);

      // Save articles to SQLite
      tx.executeSql(
        `INSERT INTO bookmarks  (
            article_id, 
            author_bio, author_name, author_pic, author_slug,
            category, content, created_at, duration, likes,
            nb_comments, recap, slug, tags,
            thumbnail, title, ploaded_since,
            added_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          article.id,
          article.author_bio,
          article.author_name,
          localAuthorPicUri, // Save local path
          article.author_slug,
          article.category,
          article.content,
          article.created_at,
          article.duration,
          article.likes,
          article.nb_comments,
          article.recap,
          article.slug,
          JSON.stringify(article.tags),
          localThumbnailUri, // Save local path
          article.title,
          article.uploaded_since,
          new Date().toISOString()
        ],
      );
    });
  });

}