import { Request, Response } from "express";
import { Candidato } from "../models/index";

class CandidatoController {

    async criarCandidato(req: Request, res: Response) {
        const {nome, foto_perfil, telefone,orient_sexual, ident_genero,
            pronome, data_nasc, empresa_ideal, id_usuario} = req.body;

        const novoCandidato = await Candidato.create({
            nome, foto_perfil, telefone, orient_sexual, ident_genero,
            pronome, data_nasc, empresa_ideal, id_usuario
        });
        return res.status(201).json(novoCandidato)
    }

    async atualizarCandidato(req: Request, res: Response) {
        const { id_candidato } = req.params;
        const {nome, foto_perfil, telefone, orient_sexual, ident_genero,
            pronome, data_nasc, resumo_qualificacoes, empresa_ideal} = req.body;

        const candidatoAtualizado = await Candidato.update({
            nome, foto_perfil, telefone, orient_sexual, ident_genero,
            pronome, data_nasc, resumo_qualificacoes, empresa_ideal
        },{
            where: {id_candidato} 
        });

        return res.status(200).json("Candidato atualizado")
    }
}

export default new CandidatoController();