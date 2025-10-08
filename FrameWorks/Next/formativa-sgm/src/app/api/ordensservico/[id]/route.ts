//Rotas que precisam do ID (PATCH ou PUT, DELETE, GET(one))

import {deleteOrdemServico, getOneOrdemServico, updateOrdemServico,} from "@/controllers/OrdemServicoController";
import { NextRequest, NextResponse } from "next/server";

//criar uma interface, PArametro ==id:string
interface Parametro {
  id: string;
}

//PATCH
export async function PATCH(
  req: NextRequest,
  { params }: { params: Parametro }
) {
  try {
    const { id } = params;
    const data = await req.json();
    const ordemServicoAtualizado = await updateOrdemServico(id, data);
    //quando o usuário não foi encontrado
    if (!ordemServicoAtualizado) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    //ordemServico foi encontrado e atualizado
    return NextResponse.json({ success: true, data: ordemServicoAtualizado });
  } catch (error) {
    //quando não consegue conexão com o bd
    return NextResponse.json({ success: false, error: error });
  }
}

// GET(One)
export async function GET({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    const ordemServico = await getOneOrdemServico(id);
    if (!ordemServico) {
      return NextResponse.json({ success: false, error: "Not Found" });
    }
    //ordemServico foi encontrado e atualizado
    return NextResponse.json({ success: true, data: ordemServico });
  } catch (error) {
    //quando não consegue conexão com o bd
    return NextResponse.json({ success: false, error: error });
  }
}

//DELETE
export async function DELETE({ params }: { params: Parametro }) {
  try {
    const { id } = params;
    await deleteOrdemServico(id);
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
}
