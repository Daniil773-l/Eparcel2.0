import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { ReactComponent as Cabinet } from './images/Cabinet.svg';
import { ReactComponent as Ichoda} from './images/Ichod.svg';
import { ReactComponent as Ichodashia} from './images/Ichodashia.svg';
import { ReactComponent as NezvPos} from './images/NezvPos.svg';
import { ReactComponent as Yslugi} from './images/Yslugi.svg';
import { ReactComponent as Tariff} from './images/QTariff.svg';
import { ReactComponent as Dostavka} from './images/QDostavka.svg';
import { ReactComponent as Vozvrat} from './images/QVozvrat.svg';
import { ReactComponent as Vukyp} from './images/QVukyp.svg';
import { ReactComponent as Stahovka} from './images/Qstrahovka.svg';
import { ReactComponent as Oplata} from './images/QOplata.svg';
import { ReactComponent as Tamozha} from './images/QTamozha.svg';
import { ReactComponent as Zaprehka} from './images/QZaprehenka.svg';
import FAQs from './components/faqs/SingleCol';

import AnimationRevealPage from "./helpers/AnimationRevealPage";
import Hero from "./components/headers/QuestionsHeader";
import Footer from "components/footers/MainFooterWithLinks";

const Layout = styled.div`
    display: flex;
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 10px rgba(45, 45, 45, 0.08);
    overflow: hidden;
    margin: 60px;
    height: 100vh;
`;

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    background: #ffffff;
    border-right: 1px solid #F5F5F5;
`;

const TabButton = styled.button`
    display: flex;
    align-items: center;
    background: ${({ active }) => active ? '#DDF2E6' : 'transparent'};
    color: #000000;
    border: none;
    padding: 10px 22px;
    font-size: 16px;
    line-height: 18px;
    font-family: 'Gilroy Medium', sans-serif;
    cursor: pointer;

    &:hover {
        background-color: #DDF2E6;
    }

    svg {
        margin-right: 20px;
        width: 30px;
        height: 30px;
    }
`;

const ContentContainer = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    transition: opacity 0.5s ease;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;

const IconContainer = styled.span``;

const tabs = [
    {
        name: "Личный кабинет",
        Icon: Cabinet,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Как открыть личный кабинет на вашем сайте?",
                        answer: "На главной странице сайта есть активная зеленая кнопка \"Зарегистрироваться\", нажав на нее, вы перейдете в раздел регистрации, где должны будете внести ваши данные и подтвердить регистрацию, согласившись с условиями пользовательского соглашения."
                    },
                    {
                        question: "Почему я не получил письмо с подтверждением регистрации?",
                        answer: "Возможно вы указали неверный адрес e-mail."
                    },
                    {
                        question: "Возможно изменить имя, адрес почты или пароль в личном кабинете?",
                        answer: "Да. Зайдите в личный кабинет в раздел \"Профиль\" и измените необходимые вам данные."
                    },
                    {
                        question: "Я потерял доступ к аккаунту. Что делать?",
                        answer: "При потере доступа к аккаунту необходимо написать в службу поддержки Eparcel."
                    },
                    {
                        question: "Я забыл пароль личного кабинета, что мне делать?",
                        answer: "Вы можете восстановить свой пароль на странице Авторизации нажав на кнопку \"Забыли пароль\" и указать свой адрес своей почты. Вам придет письмо на почту для восставновления вашего пароля."
                    },
                    {
                        question: "Как мне оформить заказ в интеренет магазине с доставкой на ваш склад?",
                        answer: "Необходимо зарегистрироваться на нашем сайте. Вы получите свой персональный номер и адрес склада. Затем вы сможете делать покупки в интернет-магазине и добавить их в корзину. При оформлении доставки указывайте свое имя на латинице, свой персональный номер (например, EPL-1000) и адрес склада. Как только вы получите трекинг номер доставки ваших покупок, отправленный интернет-магазином на вашу почту, то обязательно внесите трекинг номер в ожидаемые посылки в личном кабинете."
                    }

                ]} />
            </div>
        )
    },
    {
        name:
            "Входящие посылки" ,
        Icon: Ichodashia,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Что такое входящая посылка?",
                        answer: "Посылка полученная по адресу склада с интернет-магазина на имя клиента."
                    },
                    {
                        question: "Как я могу узнать, что вы получили мою посылку?",
                        answer: "Все полученные посылки на имена наших клиентов вносятся в складскую систему ежедневно. Если вы ввели треккинг номер вашей посылки заранее, то статус вашей посылки поменяется на \"На складе\"."
                    },
                    {
                        question: "Я выбрал товары в интернет-магазине и оформил заказ на адрес склада. Как мне отслеживать статус посылки?",
                        answer: "Необходимо добавить трекинг номер вашей посылки в ожидаемую входящую посылку через личный кабинет. При добавлении ожидаемой входящей посылки обязательно стоит указать полную информацию о вашей посылке. Если на посылке не будет указан Ваш персональный номер личного кабинета или Вы не введете заранее трекинг номер вашей посылки до прихода на склад, то при получении и обработке в складской системе посылка автоматически попадает в список “Неизвестные посылки”, что увеличивает сроки обработки Вашей посылки."
                    },
                    {
                        question: "Какой срок хранения моей входящей посылки на складе?",
                        answer: "Входящие посылки хранятся в течение 90 дней, исчисляемых с даты их регистрации Eparcel. По истечении 90 дней хранения мы имеем право утилизировать содержимое входящей посылки, если Вы не оформили доставку в Российскую Федерацию."
                    },
                    {
                        question: "Интернет-магазин задерживает доставку посылки с товарами на адрес склада. Можно ли ускорить этот процесс?",
                        answer: "Мы не несем ответственность за недобросовестность интернет-магазинов, в том числе в случаях, когда: товар выслан с задержкой; товар выслан, но не соответствует описанию; товар нерабочий (хотя заявлен как рабочий); товар вообще не выслан (случаи мошенничества)."
                    }
                ]} />
            </div>
        )
    },
    {
        name:
            " Исходящие посылки" ,
        Icon: Ichoda,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Что такое исходящая посылка?",
                        answer: "Посылка обработанная складом, ожидающая оплаты и отправки, прибывшая на склад в Казахстане, ожидающая доставки до адресата, доставленная. Посылка оплаченная и отправленная в КЗ."
                    },
                    {
                        question: "Как я могу узнать где моя посылка?",
                        answer: "Вы сможете отслеживать статус вашей посылки в личном кабинете. Сроки доставки из США в КЗ составляет 14-20 дней. Сроки доставки из Турции в КЗ составляет 7-10 дней. Если необходимо узнать дополнительную информацию статуса вашей посылке, то отправьте нам запрос по"
                    },
                    {
                        question: "Как меняется статус моей исходящей посылки?",
                        answer: "Статус исходящей посылки будет меняться в зависимости от того на каком этапе ваша посылка."
                    },

                ]} />
            </div>
        )
    },
    {
        name:
            "Неизвестные посылки" ,
        Icon: NezvPos,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Что такое неизвестная посылка?",
                        answer: "Посылка, полученная без возможности складской системе определить трекинг номер к какому персональному номеру личного кабинета принадлежит посылка. Просим Вас не забывать указывать ваш персональный номер личного кабинета."
                    },
                    {
                        question: "Если я забыл указать номер личного кабинета?",
                        answer: "В случае, если клиент не указал свой персональный номер или имя, фамилию при доставке на адрес склада, то данные посылки попадают в неизвестные посылки. Следовательно, просим Вас заранее вводить трекинг номер в ожидаемые посылки. В случае, если вы отправили посылку на адрес склада и статус не изменился в течении 5-10 рабочих дней с момента покупки товаров с интернет-магазина, то Вам необходимо написать или позвонить в службу поддержки."
                    },
                    {
                        question: "Как долго вы храните неизвестные посылки?",
                        answer: "Неизвестные посылки хранятся на складе в течении 90 дней. Далее, все посылки утилизируются."
                    },
                    {
                        question: "Я не хочу регистрироваться на сайте и открывать личный кабинет, вы сможете мне отправить мою посылку?",
                        answer: "Да, мы сможем вам отправить посылку. Вам необходимо связаться со службой поддержки для уточнения условий по доставке."
                    },

                ]} />
            </div>
        )
    },
    {
        name:
            "Услуги склада" ,
        Icon: Yslugi,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Какие услуги склады вы оказываете?",
                        answer: "Мы оказываем широкий спектр услуг для наших клиентов включая необычные запросы. С полным перечнем услуг склада вы можете ознакомиться в разделе \"Услуги и стоимость\". Обращаем ваше внимание, что мы оказываем услуги не входящие в список на нашем сайте. Для этого вам необходимо связаться со службой поддержки и уточнить условия и стомость услуги."
                    },
                    {
                        question: "Можно ли сократить вес посылки за счет переупаковки товара?",
                        answer: "Да. Услуга переупаковки товаров заключается в устранении излишней упаковки при наличии такой возможности путем ее удаления или уменьшения. Товары упаковываются в пакет из плотного полиэтилена, картонную коробку или в воздушно-пузырьковую пленку на усмотрение Eparcel. Данная услуга оказывается бесплатно, если иное не указано в договоре."
                    },
                    {
                        question: "Как долго вы храните неизвестные посылки?",
                        answer: "Неизвестные посылки хранятся на складе в течении 90 дней. Далее, все посылки утилизируются."
                    },
                    {
                        question: "Можно ли объединить или же разделить товары из разных интернет-магазинов?",
                        answer: "Да. Услуга объединения и разделения товаров по входящей посылке производится бесплатно при условии, если Вы выбрали данную услугу и ввели трекинг номер посылки в личном кабинете до регистрации входящей посылки нами. В иных случаях данная услуга будет являться платной. При этом Eparcel вправе исключать из объединения или разделения товары, содержащиеся во входящих посылках, которые запрещены к пересылке согласно действующим требованиям почтовых и курьерских служб. В течение 5 рабочих дней после обнаружения запрещенных к пересылке товаров Вы должны распорядиться указанными товарами. Если Вы не распорядились товарами в течение указанного срока, то мы вправе утилизировать их без выплаты какой-либо компенсации. Список запрещенных к пересылке товаров представлен на нашем сайте в разделе «Запрещенные товары»."
                    },
                    {
                        question: "Можно ли переупаковать мои товары в более прочную упаковку?",
                        answer: "Все входящие посылки переупаковываться для снижения объемного веса, а также в более прочную упаковку для дальнейшей доставки в КЗ. Данная услуга предоставляется совершенно бесплатно для наших клиентов."
                    },
                    {
                        question: "Мои товары точно не пострадают после переупаковки?",
                        answer: "Мы гарантируем, что при выполнении переупаковки товары не подвергаются смятию, уплотнению, скручиванию для уменьшения их габаритов."
                    },
                    {
                        question: "Вы проверяете состав товаров в посылке?",
                        answer: "Нет, но вы можете заказать данную услугу в личном кабинете в разделе \"Услуги склада\" до оформления отправления. Услуга платная."
                    },
                    {
                        question: "Могу я вернуть посылку с товарами или часть товаров обратно в магазин или продавцу?",
                        answer: "Да. Заполните заявку в личном кабинете в разделе \"Услуги склада\". Услуга платная.\n"
                    },
                    {
                        question: "Какие бесплатные дополнительные услуги может предложить ваша компания?",
                        answer: "Вы можете ознакомится с перечнем бесплатных услуг на сайте в разделе \"Услуги и стоимость\"."
                    },
                ]} />
            </div>
        )
    },
    {
        name:
            "Тарифы" ,
        Icon:  Tariff,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Как узнать конечную стоимость доставки?",
                        answer: "Итоговая стоимость услуг, оказываемых в соответствии с договором и подлежащая оплате заказчиком, устанавливается в Вашем личном кабинете по итогам формирования вашего отправления в КЗ."
                    },
                    {
                        question: "Можно ли рассчитать стоимость доставки до оформления заказа на сайте Eparcel?",
                        answer: "Да. Стоимость услуг и планируемые сроки доставки можно предварительно рассчитать при помощи калькулятора на сайте. Расчеты калькулятора являются примерными, носят информационный/справочный характер и не имеют силы оферты."
                    },
                    {
                        question: "Почему стоимость доставки отличается от тарифа указанного на сайте?",
                        answer: "Окончательная стоимость доставки вашей посылки зависит от курса валют на день оплаты."
                    },
                    {
                        question: "Что включено в стоимость тарифа?",
                        answer: "В стоимость тарифа включено: почтовый адрес склада, получение и регистрации вашей посылки, упаковка, таможенное оформление и доставка до склада в г. Москва. Доставка до получателя в КЗ оплачивается отдельно в зависимости от выбранной вами службы доставки и суммируется к общей стоимости отправления."
                    },

                ]} />
            </div>
        )
    },
    {
        name:
            " Доставка" ,
        Icon:  Dostavka,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Как мне отслеживать статус посылки?",
                        answer: "Вы можете отслеживать статус каждой посылки в личном кабинете. Дополнительно, Вам будет приходить сообщение при изменении статуса посылки на адрес электронной почты и СМС-уведомления на номер телефона, указанный при регистрации на сайте. В случае, если статус посылки не изменился в течение 10 рабочих дней, просим Вас заполнить заявление «Статус посылки» через обратную связь в личном кабинете. Срок рассмотрения заявки составляет максимально 48 часов."
                    },
                    {
                        question: "Какой срок хранения моей посылки в выбранном постамате / пункте выдачи заказа?",
                        answer: "Сроки хранения посылок устанавливаются службой доставки. По истечении срока хранения посылки в месте ее выдачи, посылка будет возвращена на наш склад в г. Москва. По истечении 30 дней, исчисляемых с даты возврата посылки на наш склад, посылка подлежит утилизации. Денежные средства за утилизированное содержимое посылки не возмещаются. Повторная доставка посылки с нашего склада осуществляется за отдельную плату."
                    },
                    {
                        question: "Интернет-магазин задерживает доставку товаров на складской адрес. Можно ли ускорить этот процесс?",
                        answer: "Мы не несем ответственность за недобросовестность интернет-магазинов, в том числе в случаях, когда: товар выслан с задержкой; товар выслан, но не соответствует описанию; товар нерабочий (хотя заявлен как рабочий); товар вообще не выслан (случаи мошенничества)."
                    },
                    {
                        question: "Какие сроки доставки посылки из США и Турции?",
                        answer: "В среднем, сроки доставки из США в КЗ  составляют от 10 до 20 дней. Сроки доставки из Турции в КЗ составляют от 5 до 15 дней в зависимости от вашего региона. К сожалению, мы не отвечаем за действия государственной почты, курьерских служб и транспортных компаний (экспресс-перевозчиков) и не можем влиять на скорость доставки. Указанные на сайте сроки доставки являются приблизительными."
                    },
                    {
                        question: "Где я могу найти адрес доставки на сайте?",
                        answer: "В вашем личном кабинете указаны адреса склада в США и Турции, на которые вы можете отправлять все ваши посылки."
                    },
                    {
                        question: "Есть ли у Вас экспресс-доставка?",
                        answer: "Все посылки отправляются авиадоставкой, что является экспресс-доставка."
                    },
                    {
                        question: "Делаете ли вы скидку на отправку большой партии товара?",
                        answer: "Если ваше отправление более 31 кг., то просим Вас связаться со службой поддержки для уточнения правил и стоимости доставки."
                    },
                    {
                        question: "Какая служба доставляет посылки в КЗ?",
                        answer: "Для удобства нашим клиентам Вам будет предложено при формлении отправлении 12 различных служб доставки посылок по КЗ на выбор"
                    },
                ]} />
            </div>
        )
    },
    {
        name:
            "Возврат" ,
        Icon:  Vozvrat,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Что такое возврат посылки?",
                        answer: "Полученная посылка на адрес склада и отправленная продавцу обратно для возврата денежных средств покупателю."
                    },
                    {
                        question: "Как мне вернуть товар покупателю?",
                        answer: "Если по каким-то причинам Вы пожелаете вернуть посылку, которая были доставлены на адрес нашего склада обратно в магазин или иному продавцу Вашего купленного товара, то мы готовы предоставить данную услугу. Вам необходимо воспользоваться в личном кабинете \"Услуги склада\" и оформить Возврат посылки с товарами."
                    },
                    {
                        question: "Как я могу вернуть поврежденный товар в посылке?",
                        answer: "Мы сообщим вам через личный кабинет, что товар в вашей посылке был поврежден и предложим вам несколько вариантов в помощи решении данной ситуации."
                    }
                ]} />
            </div>
        )
    }
    ,
    {
        name:
            "Выкуп товаров" ,
        Icon:  Vukyp,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "В момент оформления заказа на сайте интернет-магазина выяснилось, что я не могу оплатить товары своей банковской картой. Что делать?",
                        answer: "Если Вы не можете оплатить товар Вашей банковской картой, то Eparcel оформит покупку в зарубежных магазинах за Вас. Услуга «Выкуп товара» работает следующим образом: Вы делаете заказ через удобную форму в личном кабинете, а мы выкупаем для Вас нужный товар в интернет-магазине и доставляем его на наш склад, упаковываем и отправляем на указанный адрес. Стоимость услуги указана на сайте."
                    },
                    {
                        question: "Я не знаю английский язык и не понимаю, как мне оформить заказ на зарубежном сайте. Можете мне помочь?",
                        answer: "Если Вы не знаете английский и не можете оформить заказ на наш складской адрес, то Eparcel оформит покупку в зарубежных магазинах за Вас. По Вашему поручению мы можем за отдельную плату произвести выкуп товара в выбранном Вами онлайн-магазине. Поручение на выкуп товара оформляется через личный кабинет. Стоимость услуги указана на сайте."
                    }
                ]} />
            </div>
        )
    } ,
    {
        name:
            "Страхование" ,
        Icon:  Stahovka,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Я могу застраховать свою посылку?",
                        answer: "Все посылки будут автоматически застрахованы при оформлении отправления посылки."
                    },
                    {
                        question: "Я могу отказаться от страховки?",
                        answer: "Да. Отправьте нам заявку до оформления отправления посылки."
                    },
                    {
                        question: "Какая стоимость страхования моей посылки?",
                        answer: "Стоимость страхования составляет 5% от общей стоимости товаров в посылке."
                    },
                    {
                        question: "Какие страховые случаи покрывает страховка?",
                        answer: "К страховым случаям относятся: повреждение содержимого посылки и утеря посылки."
                    },
                    {
                        question: "В какие сроки вы рассматриваете заявку страхового случая и сроки выплаты страховку?",
                        answer: "Как только мы получим подтверждение о том, что ваша посылка была утеряна или повреждена, то в течении 24-72 часов вернем вам деньги. Максимальный срок рассмотрения заявки 45 дней."
                    },
                    {
                        question: "Как подать заявление о страховом случае?",
                        answer: "Заполните заявку в разделе «Контакты» указав подробно всю информацию о вашей посылки. Срок рассмотрения заявки составляет 24-48 часов."
                    },
                    {
                        question: "Как доказать, что товары в посылке были повреждены?",
                        answer:"Если вы получили поврежденную посылку, то обязательно снимите видео распаковки посылки и товаров и отправьте в приложении с заявкой на страховой случай."
                    },
                    {
                        question: "Могу я отказаться от страховки отправления?",
                        answer: "Да, вы можете отказаться от страховки до того, как мы отправим груз со склада. Отправьте запрос на почту указав всю необходимую информацию: ваш ID, номер заявки, трекинг номер вашей посылки, и мы вернем вам деньги на карту с которой вы оплатили."
                    },
                    {
                        question: "Я не получил посылку в течении 30 дней, что делать? Могу я отказаться от страховки отправления?",
                        answer: "Отправьте запрос на почту, указав всю необходимую информацию: ваш ID, номер заявки, трекинг номер вашей посылки, или свяжитесь со службой поддержки по телефону."
                    }


                ]} />
            </div>
        )
    },
    {
        name:
            "Оплата" ,
        Icon:  Oplata,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Какой валютой оплачивается заказ?",
                        answer: "Платежи совершаются в национальной валюте заказчика по курсу доллара США к национальной валюте на дату совершения платежа. Это же касается других расходов: оплата импортных пошлин, налогов и других сборов, которая может возникнуть в стране назначения, ложится на заказчика и совершается в национальной валюте."
                    },
                    {
                        question: "Что делать, если банк задерживает перевод за оплату заказа?",
                        answer: "Eparcel не несет ответственность за действия смежных служб и сервисов, не принадлежащих нам, как: банки, почтовые службы, интернет-провайдеры, е-мейл-сервисы, платежные системы и т.д."
                    }
                ]} />
            </div>
        )
    },
    {
        name:
            "Таможня" ,
        Icon:  Tamozha,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Что такое «таможенное оформление»?",
                        answer: "Процедура таможенного оформления – это комплекс мероприятий, необходимых для перемещения товаров через таможенную границу государства. Если стоимость посылки превысит 1000 (одну тысячу) евро либо вес посылки будет более 31 (тридцати одного) кг, то мы за отдельную плату обязуемся оказать Вам услугу по таможенному оформлению. Стоимость услуги указана на сайте. По требованию Eparcel Вы обязуетесь предоставить ИНН, паспортные данные, ссылки на товар в интернет-магазине, где ввозимый товар был приобретен, сканированные копии документа, удостоверяющего личность и скриншот заказа, а также иные сведения, необходимые для таможенного оформления. В случае предоставления неверной информации мы или наши партнеры имеем право произвести реэкспорт посылки (обратный вывоз). Все затраты по реэкспорту и повторной доставке посылки оплачиваются Вами через личный кабинет. При этом Вы даете согласие компании Eparcel, ее партнерам, уполномоченным государственным органам, включая таможенные, в целях соблюдения законодательства или устранения возможного вреда другим посылкам, а также при подозрении на недопустимое или опасное вложение, вскрывать и проверять посылки."
                    },
                    {
                        question: "Для чего нужна таможенная декларация?",
                        answer: "Таможенная декларация – это обязательный документ, который требуют таможенные органы Российской Федерации для почтовых отправлений с товарными вложениями. В нее необходимо внести содержимое посылки: стоимость, наименование и количество товаров – все это делается для контролирующих инстанций."
                    },
                    {
                        question: "Каковы беспошлинные лимиты на посылки из-за границы?",
                        answer: "На сегодняшний день допустимый таможенный лимит в Российской Федерации для одного физического лица составляет 1000 евро и 31 кг на одну посылку (или несколько посылок, если они проходят таможню одновременно, в один день)."
                    },
                    {
                        question: "Что будет, если я не укажу состав посылки и характеристики товаров или укажу их неверно?",
                        answer: "При оформлении заказа Вы должны знать, что в случае предоставления недостоверной или заведомо ложной информации о товаре или его содержимом к нему может быть предъявлен гражданский иск и/или он может быть привлечен к административной или уголовной ответственности, в связи с чем к нему могут быть применены виды наказания в виде штрафов, конфискации и продажи товара. Перевозчик может на добровольной основе оказать содействие в осуществлении таможенного оформления и других процедур, но весь риск будет отнесен на счет заказчика. Вы будете должны возместить перевозчику убытки и оградить его от претензий, которые могут возникнуть в связи с предоставленной им информацией, а также от любых издержек, которые перевозчик может понести в связи с вышеизложенным, а также оплатить любые административные расходы, связанные с оказанием услуг, предусмотренных договором."
                    }
                ]} />
            </div>
        )
    },
    {
        name:
            "Запрещенные товары" ,
        Icon:  Zaprehka,
        content: (
            <div>
                <FAQs faqs={[
                    {
                        question: "Какие товары запрещены в доставке из-за границы в Казахстан?",
                        answer: "Вы можете ознакомиться с полным списком товаров, запрещенных в доставке, на нашем сайте в разделе «Запрещенные товары»."
                    }
                ]} />
            </div>
        )
    }

];

export default function App() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeContent, setActiveContent] = useState(tabs[0].content);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        setIsActive(false);
        setTimeout(() => {
            setActiveContent(tabs[activeTab].content);
            setIsActive(true);
        }, 500);
    }, [activeTab]);

    return (
        <AnimationRevealPage>
            <Hero roundedHeaderButton={true} />
            <Layout>
                <SidebarContainer>
                    {tabs.map((tab, index) => (
                        <TabButton
                            key={index}
                            active={index === activeTab}
                            onClick={() => setActiveTab(index)}
                        >
                            <IconContainer><tab.Icon active={index === activeTab} /></IconContainer>
                            {tab.name}
                        </TabButton>
                    ))}
                </SidebarContainer>
                <ContentContainer isActive={isActive}>
                    {activeContent}
                </ContentContainer>
            </Layout>
            <Footer />
        </AnimationRevealPage>
    );
}
