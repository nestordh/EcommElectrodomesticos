import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('sessions.db')

export const init = () => {
    const promise = new Promise((acep, rech) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, idToken TEXT NOT NULL)',
                [],
                (_, result) => acep(result),
                (_, error) => rech(error)
            )
        })
    })
    return promise
}

export const dropTableSessions = () => {
    const promise = new Promise((acep, rech) => {
        db.transaction(tx => {
            tx.executeSql(
                'DROP TABLE IF EXISTS sessions ',
                [],
                (_, result) => acep(result),
                (_, error) => rech(error)
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
    const promise = new Promise((acep, rech) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO sessions (email, localId, idToken) VALUES (?, ?, ?);',
                [email, localId, idToken],
                (_, result) => acep(result),
                (_, error) => rech(error)
            )
        })
    })
    return promise
}

export const getSession = () => {
    const promise = new Promise((acep, rech) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM sessions',
                [],
                (_, result) => acep(result),
                (_, error) => rech(error)
            )
        })
    })
    return promise
}

export const deleteSession = (localId) => {
    const promise = new Promise((acep, rech) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM sessions WHERE localId = ?',
                [localId],
                (_, result) => acep(result),
                (_, error) => rech(error)
            )
        })
    })
    return promise
}