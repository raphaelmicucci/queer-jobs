import { Request, Response } from "express";
import { Empresa } from "../models/Empresa";

class EmpresaController {

    async criarEmpresa(req: Request, res: Response) {
        const {nome, sobre, imagem_perfil, ano_fundacao, setor, subsetor, num_funcionaries,
            site, linkedin, instagram, twitter, tiktok, sobre_cultura, sobre_diversidade,
            funcionaries_lgbtqia, liderancas_lgbtqia, politicas_lgbtqia, id_usuario} = req.body;
        const novaEmpresa = await Empresa.create({
            nome, sobre, imagem_perfil, ano_fundacao, setor, subsetor, num_funcionaries,
            site, linkedin, instagram, twitter, tiktok, sobre_cultura, sobre_diversidade,
            funcionaries_lgbtqia, liderancas_lgbtqia, politicas_lgbtqia, id_usuario
        });
        return res.status(201).json(novaEmpresa)
    }
    
}

export default new EmpresaController();