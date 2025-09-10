export interface FaqTypes {
  question: string;
  answer: string;
}

export const faqs: FaqTypes[] = [
  {
    question: "Bu dummy bir soru mudur?",
    answer:
      "Evet, bu tamamen dummy içeriktir. Gerçek içerik daha sonra eklenecektir.",
  },
  {
    question: "Neden dummy içerik kullanıyoruz?",
    answer:
      "Dummy içerik, geliştirme sürecinde placeholder olarak kullanılır. Bu sayede tasarım ve yapı üzerinde çalışabilir, gerçek içerik hazır olduğunda kolayca değiştirebiliriz.",
  },
  {
    question: "Bu içerik kalıcı mı?",
    answer:
      "Hayır, bu sadece geçici placeholder içeriktir. Gerçek FAQ'ler hazır olduğunda bu içerik değiştirilecektir.",
  },
  {
    question: "Kaç tane dummy soru var?",
    answer:
      "Şu anda birkaç dummy soru bulunmaktadır. İhtiyaca göre daha fazla eklenebilir veya mevcut olanlar düzenlenebilir.",
  },
  {
    question: "Bu dummy içerik nasıl görünüyor?",
    answer:
      "Bu, tipik bir FAQ bölümü gibi görünür ancak gerçek bilgiler yerine placeholder metinler içerir.",
  }
];
