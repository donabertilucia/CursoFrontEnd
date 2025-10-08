// Rotas de requisição api que não usam ID
import { createOrdemServico, getAllOrdemServico } from "@/controllers/OrdemServicoController"
import { NextResponse } from "next/server";

// get
export async function GET() {
    try {
        const ordemServicos = await getAllOrdemServico();
        return NextResponse.json({success:true, data: ordemServicos});
    } catch (error) {
        return NextResponse.json({success:false, error:error})
    }
}

export async function POST(req:NextResponse){
    try {
        const data = await req.json();
        const novoUsuario = await createOrdemServico(data);
        return NextResponse.json({ success: true, data:novoUsuario});
    } catch (error) {
        return NextResponse.json({ success: false, data:error });
    }
    
}

// post