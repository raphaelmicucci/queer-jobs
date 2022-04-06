import { db } from '../db/index';
import { DataTypes } from 'sequelize';
import { Vaga } from './Vaga';

export const Beneficio = db.define('beneficios', {
    id_beneficio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    valor: {
        type: DataTypes.FLOAT
    },
    id_vaga: {
        type: DataTypes.INTEGER,
        references: {
            model: Vaga,
            key: "id_vaga"
        }
    }
});