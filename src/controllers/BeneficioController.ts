import { Request, Response } from "express";
import { Beneficio } from "../models/index";

class BeneficioController {

    async criarBeneficio(req: Request, res: Response) {
        const { nome, valor, id_vaga } = req.body;
        const novaBeneficio = await Beneficio.create({
            nome, valor, id_vaga
        });
        return res.status(201).json(novaBeneficio)
    }
}

export default new BeneficioController();