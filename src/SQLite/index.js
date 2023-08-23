import * as SQLite from 'expo-sqlite'
//se define la conexion y el estado inicial de la db

//Generar un archivo (en Windows:se encuentra en Documents)
const db = SQLite.openDatabase('sessions.db')

//Inicializar la tabla
export const init = () => {
    const promise = new Promise((res, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, idToken TEXT NOT NULL)',
                //crea la tabla si no existe con tres columnas: localId , email y idToken
                [],
                (_, result) => res(result),
                (_, error) => rej(error)
            )
        })
    })
    return promise
}

//Borrar la tabla sessions
export const dropTableSessions = () => {
    const promise = new Promise((res, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'DROP TABLE IF EXISTS sessions ',
                [],
                (_, result) => res(result),
                (_, error) => rej(error)
            )
        })
    })
    return promise
}

export const insertSession = ({
    email,
    localId,
    idToken
}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO sessions (email, localId, idToken) VALUES (?, ?, ?);',
                [email, localId, idToken],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const getSession = () => {
    const promise = new Promise((acc, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM sessions',
                [],
                (_, result) => acc(result),
                (_, error) => rej(error)
            )
        })
    })
    return promise
}

export const deleteSession = (localId) => {
    const promise = new Promise((acc, rej) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM sessions WHERE localId = ?',
                [localId],
                (_, result) => acc(result),
                (_, error) => rej(error)
            )
        })
    })
    return promise
}