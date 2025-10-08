// Rotas de requisição api que não usam ID
import { createUsuario, getAllUsuario } from "@/controllers/UsuarioController";
import { NextResponse } from "next/server";

// get
export async function GET() {
    try {
        const usuarios = await getAllUsuario();
        return NextResponse.json({success:true, data: usuarios});
    } catch (error) {
        return NextResponse.json({success:false, error:error})
    }
}

export async function POST(req:NextResponse){
    try {
        const data = await req.json();
        const novoUsuario = await createUsuario(data);
        return NextResponse.json({ success: true, data:novoUsuario});
    } catch (error) {
        return NextResponse.json({ success: false, data:error });
    }
    
}

// post