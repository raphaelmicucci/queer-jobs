import { Request, Response } from "express";
import { Experiencia } from "../models/index";

class ExperienciaController {

    async criarExperiencia(req: Request, res: Response) {
        const { empresa, cargo, data_inicio, data_fim, modalidade, id_candidato } = req.body;
        const novaExperiencia = await Experiencia.create({
            empresa, cargo, data_inicio, data_fim, modalidade, id_candidato
        });
        return res.status(201).json(novaExperiencia)
    }
}

export default new ExperienciaController();