import { Request, Response } from "express";
import { Usuario } from "../models/index";
import * as bcrypt from "bcrypt";

class UsuarioController {

    async criarUsuario(req: Request, res: Response) {
        const {nome, email, senha} = req.body;

        const novaSenha = bcrypt.hashSync(senha, 10);

        const novoUsuario = await Usuario.create({
            nome, email, senha: novaSenha
        });
        return res.status(201).json(novoUsuario)
    }
}

export default new UsuarioController();