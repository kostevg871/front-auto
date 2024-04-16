import Title from "antd/es/typography/Title";
import { InputData } from "../components/InputData";

const MainPage = () => {
  return (
    <>
      <Title>Исходные данные для расчета</Title>
      <InputData
        label="Первое приближение теплообменной площади"
        name="Площадь"
      />
      <InputData
        label="Первое приближение активной высоты навивки"
        name="Площадь"
      />
      <InputData label=" Наружный диаметр трубки" name="Площадь" />
      <InputData label="Внутренний диаметр трубки" name="Площадь" />
      <InputData
        label="Первое приблежение общего количества трубок"
        name="Площадь"
      />
      <InputData
        label="Первое прибдежение количества рядов навивки"
        name="Площадь"
      />
      <InputData label="Горизонтальный шаг змеевика" name="Площадь" />
      <InputData label="Вертикальный шаг змеевика" name="Площадь" />
      <InputData
        label="Первое приближение диаметра первого ряда змеевика"
        name="Площадь"
      />
    </>
  );
};

export default MainPage;
