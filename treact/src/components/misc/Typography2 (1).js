import tw from "twin.macro";

export const SectionDescription = tw.p`
  mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100
  w-full // Указывает на то, что ширина элемента должна быть 100%
  mx-0 // Убирает горизонтальные отступы
  px-4 md:px-8 // Добавляет небольшие паддинги для адаптивности, их можно регулировать по вкусу
`;
