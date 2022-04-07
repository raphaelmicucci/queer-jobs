import { db } from '../db/index';
import { DataTypes } from 'sequelize';
import { Usuario } from './Usuario';

export const Candidato = db.define('candidatos', {
    id_candidato: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    foto_perfil: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    orient_sexual: {
        type: DataTypes.STRING
    },
    ident_genero: {
        type: DataTypes.STRING
    },
    pronome: {
        type: DataTypes.STRING
    },
    data_nasc: {
        type: DataTypes.DATE
    },
    resumo_qualificacoes: {
        type: DataTypes.TEXT
    },
    empresa_ideal: {
        type: DataTypes.TEXT
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: "id_usuario"
        }
    }
});