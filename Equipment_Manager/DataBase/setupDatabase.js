import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('seuBancoDeDados.db');

// Função para criar a tabela
const setupDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, category TEXT);',
      [],
      (_, error) => {
        if (error) {
          console.error('Erro ao criar a tabela:', error);
        }
      }
    );
  });
};

// Função para adicionar um item ao banco de dados
const addItem = (category, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO items (category) VALUES (?);',
      [category],
      (_, { insertId, rows }) => {
        callback({ id: insertId, category });
      },
      (_, error) => {
        console.error('Erro ao adicionar item:', error);
      }
    );
  });
};

// Função para obter todos os itens do banco de dados
const getItems = callback => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM items;',
      [],
      (_, { rows }) => {
        const items = rows._array;
        callback(items);
      },
      (_, error) => {
        console.error('Erro ao obter itens:', error);
      }
    );
  });
};

export { setupDatabase, addItem, getItems };