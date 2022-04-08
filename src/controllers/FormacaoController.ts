import { Request, Response } from "express";
import { Formacao } from "../models/index";

class FormacaoController {
    async criarFormacao(req: Request, res: Response) {
        const { formacao, status, grau, curso, instituicao, data_inicio, data_fim, id_candidato } = req.body;
        const novaFormacao = await Formacao.create({
            formacao, status, grau, curso, instituicao, data_inicio, data_fim, id_candidato
        });
        return res.status(201).json(novaFormacao)
    }
}

export default new FormacaoController();