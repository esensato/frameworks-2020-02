DROP TABLE IF EXISTS tab_aluno;
 
CREATE TABLE tab_aluno (
  id_aluno INT AUTO_INCREMENT  PRIMARY KEY,
  nome VARCHAR(30) NOT NULL,
  nota DECIMAL NOT NULL
);

-- Turma possui um id numérico sequencial, um nome de identificação e o total de alunos;

DROP TABLE IF EXISTS Turma;

CREATE TABLE Turma (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  identificacao VARCHAR(10),
  totalmatriculas INT)
  
  

