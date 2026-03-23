import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { useCriarConta } from './queryes';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { rotas } from '@constants/rotas';

export const CreateUserSchema = z.object({
    nome: z.string().min(1, "Nome obrigatório"),
    email: z.string().min(1, "Email obrigatório").email("Email inválido"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    role: z.enum(["ALUNO", "PROFESSOR", "ADMIN"]),
    status: z.enum(["ATIVO", "INATIVO"]),
    data_nascimento: z.string().min(1, "Data de nascimento obrigatória"),
    celular: z.string().min(10, "Celular inválido"),
    instituicoes: z.array(z.number().min(1)).min(1, "Selecione pelo menos uma instituição"),
});

export type CriarUsuarioForm = z.infer<typeof CreateUserSchema>;

export const useCriarUsuarioController = () => {
    const { post, isPending } = useCriarConta();
    const navigate = useNavigate();

    const {
        control,
        register,
        watch,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<CriarUsuarioForm>({
        resolver: zodResolver(CreateUserSchema),
        defaultValues: {
            role: "ALUNO",
            status: "ATIVO",
        },
    });

    const handleSala = handleSubmit(async (data) => {
        await post(data);
        reset();
        navigate(rotas.LOGIN);
    });

    return {
        handleSala,
        register,
        control,
        errors,
        watch,
        setValue,
        isPending
    };
};
