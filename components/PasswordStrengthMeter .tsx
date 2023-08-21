import React from 'react';
import { ProgressBar } from 'react-native-paper';

const PasswordStrengthMeter = ({password}) => {

  const [strength, setStrength] = React.useState(0);

  React.useEffect(() => {
    const lengthScore = password.length > 8 ? 1 : 0;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecial = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password);

    let score = lengthScore + (hasUpperCase ? 1 : 0) + (hasNumbers ? 1 : 0) + (hasSpecial ? 1 : 0);
    score = score / 4;

    setStrength(score);
  }, [password]);

  return (
    <ProgressBar 
      progress={strength} 
      color={strength > 0.5 ? '#4CAF50' : '#FFEB3B'} 
    />
  );
}

export default PasswordStrengthMeter;