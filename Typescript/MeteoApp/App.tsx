import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>AppMeteo</Text>
      {/* Autres composants de votre application ici */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red', // Couleur d'arrière-plan rouge
    justifyContent: 'relative',
    alignItems: 'center',
    width: 500,
    padding: 10,
  },
  welcomeText: {
    fontSize: 70, // Taille de police de 30
    fontWeight: 'bold',
    color: 'white', // Couleur du texte en blanc
  },
});


const App_1: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (text: string) => {
    setQuestion(text);
  };

  const handleShowAnswer = () => {
    // Ici, vous pouvez implémenter la logique pour trouver la réponse en fonction de la question
    // Pour cet exemple, nous allons simplement afficher la question elle-même comme réponse
    setAnswer(question);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Posez votre question :</Text>
      <TextInput
        style={styles.input}
        value={question}
        onChangeText={handleQuestionChange}
      />
      <Button title="Afficher la réponse" onPress={handleShowAnswer} />
      {answer !== '' && (
        <Text style={styles.answerText}>Réponse : {answer}</Text>
      )}
    </View>
  );
};

export default App;

