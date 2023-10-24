


import * as z from "zod";

// Profile Schema <Start/>
export const profileSchema = z.object({
  nome: z.string().min(2, {
    message: "🥺 obrigatorio e deve ter no minumo 2 caracteres.",
  }),
  apelido: z.string().min(2, {
    message: "Apelido é obrigatorio de nao deve ter no minumo 2 caracteres.",
    
  }).optional(),
  sexo: z.string({
    required_error: "Por favor selecione o sexo na lista.",
  }),
  data_nascimento: z.date({
    required_error: "Por favor selecione a data",
    invalid_type_error: "Isso nao é uma data",
  }),
  nacionalidade: z.string({
    required_error: "Por favor selecione a nacionalidade na lista.",
  }),
});

// This can come from your database or API.
export const profileDefaultValues: Partial<ProfileFormValues> = {
  nacionalidade: "Mocambique",
};

export type ProfileFormValues = z.infer<typeof profileSchema>;

// Profile Carreira Schema <Start/>
export const profileCarreiraSchema = z.object({
  carreira: z.string().min(2, {
    message: "Carreira é obrigatorio de nao deve ter no minumo 2 caracteres.",
  }),
  Categoria: z.string(),
  especialiodade: z.string(),
  cargo: z.string(),
  tipoVinculacao: z.string()
});

export type ProfileCarreiraFormValues = z.infer<typeof profileCarreiraSchema>;

// Profile Carreira Schema <End/>

export const profileAlocacaoSchema = z.object({
  provincia: z.string(),
  distrito: z.string(),
  estabelecimento: z.string(),


  tipoEntrada: z.string(),
  anoConclusaoCurso: z.date(),
});

export type ProfileAlocacaoFormValues = z.infer<typeof profileAlocacaoSchema>;

// Profile Schema <End/>


export const carreiraSchema = z.object({
  nome: z.string().min(2, {
    message: "Carreira é obrigatorio de nao deve ter no minumo 2 caracteres.",
  }),
  data: z.date({
    required_error: "Por favor selecione a data",
    invalid_type_error: "Isso nao é uma data",
  }),
  regimeId: z.string(),
  carreiraId: z.string(),
});

export type CarreiraFormValues = z.infer<typeof carreiraSchema>;

export const ocupacaoSchema = z.object({
  nome: z.string().min(2, {
    message: "Carreira é obrigatorio de nao deve ter no minumo 2 caracteres.",
  }),
});

export type OcupacaoFormValues = z.infer<typeof ocupacaoSchema>;