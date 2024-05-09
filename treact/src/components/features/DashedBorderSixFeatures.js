import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import defaultCardImage from "../../images/shield-icon.svg";
import {ReactComponent as SvgDecoratorBlob3} from "../../images/svg-decorator-blob-3.svg";

import BabyAspen from "../../images/Brands/Babyaspen.svg";
import Boba from "../../images/Brands/boba.svg";
import BYNX from "../../images/Brands/BYNXYb.svg";
import Carters from "../../images/Brands/Carters.svg";
import Cooksk from "../../images/Brands/Cooksk.svg";
import Cottonon from "../../images/Brands/Cottonon.svg";
import Disney from "../../images/Brands/Disney.svg";
import FatBrain from "../../images/Brands/FatBrain.svg";
import GapKids from "../../images/Brands/GapKids.svg";
import Gymboree from "../../images/Brands/Gymboree.svg";
import Lego from "../../images/Brands/Lego.svg";
import Lovevery from "../../images/Brands/Lovevery.svg";
import OshKosh from "../../images/Brands/OshKosh.svg";
import Children from "../../images/Brands/ChildrePlace.svg";
import ToysR from "../../images/Brands/ToysR.svg";
import Zulil from "../../images/Brands/Zulil.svg";
import BodyBuild from "../../images/Brands/Bodtbuld.svg";
import CVS from "../../images/Brands/CVS.svg";
import Terrara from "../../images/Brands/Terrara.svg";
import GNS from "../../images/Brands/GNS.svg";
import iHerb from "../../images/Brands/iHerb.svg";
import LuckyVitamin from "../../images/Brands/LuckyVitamin.svg";
import RiteAid from "../../images/Brands/RiteAid.svg";
import Swanson from "../../images/Brands/Swanson.svg";
import ThriveMarket from "../../images/Brands/ThriveMarket.svg";
import VitaminShoppe from "../../images/Brands/VitaminShoppe.svg";
import Walgreens from "../../images/Brands/Walgreens.svg";
import Bark from "../../images/Brands/Bark.svg";
import Chewy from "../../images/Brands/Chewy.svg";
import Petco from "../../images/Brands/Petco.svg";
import PetSmart from "../../images/Brands/PetSmart.svg";
import ABH from "../../images/Brands/ABH.svg";
import ArmaniBeauty from "../../images/Brands/ArmaniBeauty.svg";
import BathandBodyWorks from "../../images/Brands/BathandBodyWorks.svg";
import Beautylish from "../../images/Brands/Beautylish.svg";
import BobbyBrown from "../../images/Brands/BobbyBrown.svg";
import CharlotteTilbury from "../../images/Brands/CharlotteTilbury.svg";
import ColorPOP from "../../images/Brands/ColorPOP.svg";
import DermStore from "../../images/Brands/DermStore.svg";
import Ecosmetics from "../../images/Brands/Ecosmetics.svg";
import EstéeLauder from "../../images/Brands/EstéeLauder.svg";
import MAC from "../../images/Brands/MAC.svg";
import Morphe from "../../images/Brands/Morphe.svg";
import Sephora from "../../images/Brands/Sephora.svg";
import SkinStore from "../../images/Brands/SkinStore.svg";
import Tarte from "../../images/Brands/Tarte.svg";
import Thebodyshop from "../../images/Brands/Thebodyshop.svg";
import TomFord from "../../images/Brands/TomFord.svg";
import TooFaced from "../../images/Brands/TooFaced.svg";
import Ulta from "../../images/Brands/Ulta.svg";
import Amazon from "../../images/Brands/Amazon.svg";
import Newegg from "../../images/Brands/Newegg.svg";
import Overstock from "../../images/Brands/Overstock.svg";
import TheHomeDepot from "../../images/Brands/TheHomeDepot.svg";
import Ebay from "../../images/Brands/Ebay.svg";
import ETSY from "../../images/Brands/ETSY.svg";
import Kohls from "../../images/Brands/Kohls.svg";
import Mercari from "../../images/Brands/Mercari.svg";
import Target from "../../images/Brands/Target.svg";
import Walmart from "../../images/Brands/Walmart.svg";
import sixpm from "../../images/Brands/sixpm.svg";
import Abercrombie from "../../images/Brands/Abercrombie.svg"
import Adidas from "../../images/Brands/Adidas.svg"
import Aeropostale from "../../images/Brands/Aeropostale.svg"
import AldoShoes from "../../images/Brands/AldoShoes.svg"
import AmericanEagle from "../../images/Brands/American Eagle.svg"
import ASOS from "../../images/Brands/ASOS.svg"
import Cabelas from "../../images/Brands/Cabelas.svg"
import COACH from "../../images/Brands/COACH.svg"
import Crocs from "../../images/Brands/Crocs.svg"
import DSW from "../../images/Brands/DSW.svg"
import EddieBauer from "../../images/Brands/EddieBauer.svg"
import Fashionnova from "../../images/Brands/Fashionnova.svg"
import FootLocker from "../../images/Brands/FootLocker.svg"
import Forever21 from "../../images/Brands/Forever21.svg"
import Gap from "../../images/Brands/Gap.svg"
import HM from "../../images/Brands/HM.svg"
import JCPenney from "../../images/Brands/JCPenney.svg"
import Levis from "../../images/Brands/Levis.svg"
import Macys from "../../images/Brands/Macys.svg"
import MassimoDutti from "../../images/Brands/MassimoDutti.svg"
import MichaelKors from "../../images/Brands/MichaelKors.svg"
import MissGuided from "../../images/Brands/MissGuided.svg"
import NewBalance from "../../images/Brands/NewBalance.svg"
import Nike from "../../images/Brands/Nike.svg"
import Nordstrom from "../../images/Brands/Nordstrom.svg"
import OldNavy from "../../images/Brands/OldNavy.svg"
import RalphLauren from "../../images/Brands/RalphLauren.svg"
import Reebok from "../../images/Brands/Reebok.svg"
import Sketchers from "../../images/Brands/Sketchers.svg"
import SteveMadden from "../../images/Brands/SteveMadden.svg"
import TheNorthFace from "../../images/Brands/TheNorthFace.svg"
import Timberland from "../../images/Brands/Timberland.svg"
import TommyHilfiger from "../../images/Brands/TommyHilfiger.svg"
import UGG from "../../images/Brands/UGG.svg"
import UnderArmour from "../../images/Brands/UnderArmour.svg"
import Vans from "../../images/Brands/Vans.svg"
import VictoriasSecret from "../../images/Brands/VictoriasSecret.svg"
import Zappos from "../../images/Brands/Zappos.svg"
import Zara from "../../images/Brands/Zara.svg"
import ACADEMY from "../../images/Brands/ACADEMY.svg"
import ALOYoga from "../../images/Brands/ALOYoga.svg"
import DICKSSportingGoods from "../../images/Brands/DICKSSportingGoods.svg"
import EVO from "../../images/Brands/EVO.svg"
import GymShark from "../../images/Brands/GymShark.svg"
import JOANN from "../../images/Brands/JOANN.svg"
import LULULEMON from "../../images/Brands/LULULEMON.svg"
import Michaels from "../../images/Brands/Michaels.svg"
import SaveDollarStores from "../../images/Brands/SaveDollarStores.svg"
import SCHEELS from "../../images/Brands/SCHEELS.svg"
import Apple from "../../images/Brands/Apple.svg"
import BH from "../../images/Brands/BH.svg"
import BackMarket from "../../images/Brands/BackMarket.svg"
import BestBuy from "../../images/Brands/BestBuy.svg"
import DELL from "../../images/Brands/DELL.svg"
import IROBOT from "../../images/Brands/IROBOT.svg"
import Lenovo from "../../images/Brands/Lenovo.svg"
import Oculus from "../../images/Brands/Oculus.svg"
import Samsung from "../../images/Brands/Samsung.svg"
import TigerDirect from "../../images/Brands/TigerDirect.svg"
import Ebebek from "../../images/Brands/Ebebek.svg"
import Joker from "../../images/Brands/Joker.svg"
import Minycenter from "../../images/Brands/Minycenter.svg"
import Temel from "../../images/Brands/Temel.svg"
import ToyzzShop from "../../images/Brands/ToyzzShop.svg"
import Avansas from "../../images/Brands/Avansas.svg"
import Hepsiburada from "../../images/Brands/Hepsiburada.svg"
import Migros from "../../images/Brands/Migros.svg"
import n11 from "../../images/Brands/n11.svg"
import Avon from "../../images/Brands/Avon.svg"
import Boyner from "../../images/Brands/Boyner.svg"
import Brandroom from "../../images/Brands/Brandroom.svg"
import EtatPur from "../../images/Brands/EtatPur.svg"
import Eveshop from "../../images/Brands/Eveshop.svg"
import Flavus from "../../images/Brands/Flavus.svg"
import HaticeTeyze from "../../images/Brands/HaticeTeyze.svg"
import Kokoma from "../../images/Brands/Kokoma.svg"
import Naos from "../../images/Brands/Naos.svg"
import Oleamea from "../../images/Brands/Oleamea.svg"
import Sinoz from "../../images/Brands/Sinoz.svg"
import Tbrush from "../../images/Brands/Tbrush.svg"
import A101 from "../../images/Brands/A101.svg"
import aZall from "../../images/Brands/aZall.svg"
import Beymen from "../../images/Brands/Beymen.svg"
import Bpazar from "../../images/Brands/Bpazar.svg"
import CarrefourSA from "../../images/Brands/CarrefourSA.svg"
import ExxeSelection from "../../images/Brands/ExxeSelection.svg"
import Gratis from "../../images/Brands/Gratis.svg"
import Happy from "../../images/Brands/Happy.svg"
import Morhipo from "../../images/Brands/Morhipo.svg"
import PttAVM from "../../images/Brands/PttAVM.svg"
import Trendyol from "../../images/Brands/Trendyol.svg"
import Addax from "../../images/Brands/Addax.svg"
import Aker from "../../images/Brands/Aker.svg"
import Aris from "../../images/Brands/Aris.svg"
import Armine from "../../images/Brands/Armine.svg"
import Asics from "../../images/Brands/Asics.svg"
import Avva from "../../images/Brands/Avva.svg"
import AyakkabıDünyası from "../../images/Brands/AyakkabıDünyası.svg"
import Bershka from "../../images/Brands/Bershka.svg"
import Blackspade from "../../images/Brands/Blackspade.svg"
import BSL from "../../images/Brands/BSL.svg"
import Cacharel from "../../images/Brands/Cacharel.svg"
import Camper from "../../images/Brands/Camper.svg"
import Colins from "../../images/Brands/Colins.svg"
import Columbia from "../../images/Brands/Columbia.svg"
import ÇorapSepeti from "../../images/Brands/ÇorapSepeti.svg"
import ÇorapToptancisi from "../../images/Brands/ÇorapToptancisi.svg"
import DSdamat from "../../images/Brands/DSdamat.svg"
import Desa from "../../images/Brands/Desa.svg"
import Dilvin from "../../images/Brands/Dilvin.svg"
import Divarese from "../../images/Brands/Divarese.svg"
import Elmoda from "../../images/Brands/Elmoda.svg"
import EmelPırlanta from "../../images/Brands/EmelPırlanta.svg"
import EylulAlyans from "../../images/Brands/EylulAlyans.svg"
import Farfetch from "../../images/Brands/Farfetch.svg"
import FashFed from "../../images/Brands/FashFed.svg"
import Fitmoda from "../../images/Brands/Fitmoda.svg"
import Fivescarf from "../../images/Brands/Fivescarf.svg"
import Gaptr from "../../images/Brands/Gaptr.svg"
import Glingerie from "../../images/Brands/Glingerie.svg"
import GSStore from "../../images/Brands/GSStore.svg"
import Gülaylar from "../../images/Brands/Gülaylar.svg"
import Hemington from "../../images/Brands/Hemington.svg"
import Hotic from "../../images/Brands/Hotic.svg"
import Hummel from "../../images/Brands/Hummel.svg"
import iLVi from "../../images/Brands/iLVi.svg"
import InterSport from "../../images/Brands/InterSport.svg"
import Korayspor from "../../images/Brands/Korayspor.svg"
import Koton from "../../images/Brands/Koton.svg"
import Kuaybegider from "../../images/Brands/Kuaybegider.svg"
import Levidor from "../../images/Brands/Levidor.svg"
import LizayPırlanta from "../../images/Brands/LizayPırlanta.svg"
import Lovemybody from "../../images/Brands/Lovemybody.svg"
import LTBjeans from "../../images/Brands/LTBjeans.svg"
import Markastok from "../../images/Brands/Markastok.svg"
import MarksSpencer from "../../images/Brands/MarksSpencer.svg"
import Mavi from "../../images/Brands/Mavi.svg"
import Modanisa from "../../images/Brands/Modanisa.svg"
import MoonSports from "../../images/Brands/MoonSports.svg"
import Mudo from "../../images/Brands/Mudo.svg"
import NetWork from "../../images/Brands/NetWork.svg"
import NevzatOnay from "../../images/Brands/NevzatOnay.svg"
import Occasion from "../../images/Brands/Occasion.svg"
import PierreCardin from "../../images/Brands/PierreCardin.svg"
import PırlantaMerkezim from "../../images/Brands/PırlantaMerkezim.svg"
import PlaySports from "../../images/Brands/PlaySports.svg"
import Pomidik from "../../images/Brands/Pomidik.svg"
import PullBear from "../../images/Brands/PullBear.svg"
import Puma from "../../images/Brands/Puma.svg"
import SaatSaat from "../../images/Brands/SaatSaat.svg"
import SilkandCashmere from "../../images/Brands/SilkandCashmere.svg"
import Skechers from "../../images/Brands/Skechers.svg"
import Slazenger from "../../images/Brands/Slazenger.svg"
import SneaksCloud from "../../images/Brands/SneaksCloud.svg"
import Sporjinal from "../../images/Brands/Sporjinal.svg"
import Sporthink from "../../images/Brands/Sporthink.svg"
import Sportive from "../../images/Brands/Sportive.svg"
import Sportstyle from "../../images/Brands/Sportstyle.svg"
import SPX from "../../images/Brands/SPX.svg"
import Stradivarius from "../../images/Brands/Stradivarius.svg"
import SuperStep from "../../images/Brands/SuperStep.svg"
import Suwen from "../../images/Brands/Suwen.svg"
import Themoosebay from "../../images/Brands/Themoosebay.svg"
import TommyLife from "../../images/Brands/TommyLife.svg"
import TouchéPrivé from "../../images/Brands/TouchéPrivé.svg"
import Tudors from "../../images/Brands/Tudors.svg"
import USPoloASSN from "../../images/Brands/USPoloASSN.svg"
import UnitedColorsofBenetton from "../../images/Brands/UnitedColorsofBenetton.svg"
import Yalispor from "../../images/Brands/Yalispor.svg"
import Yargici from "../../images/Brands/Yargici.svg"
import Arçelik from "../../images/Brands/Arçelik.svg"
import Beko from "../../images/Brands/Beko.svg"
import Braunshop from "../../images/Brands/Braunshop.svg"
import Casper from "../../images/Brands/Casper.svg"
import Doremusic from "../../images/Brands/Doremusic.svg"
import Fakir from "../../images/Brands/Fakir.svg"
import KorkmazStore from "../../images/Brands/KorkmazStore.svg"
import MediaMarkt from "../../images/Brands/MediaMarkt.svg"


const Container = tw.div`relative`;
const ThreeColumnContainer = styled.div`
    ${tw`flex flex-row flex-wrap justify-center max-w-screen-xl mx-auto`}
    margin-top: 10px; // Reduced top margin
    width: 100%;
    padding: 0 10px; // Add padding to ensure content does not touch the edges
`;
const Column = styled.div`
    ${tw`flex justify-center p-4`}
    width: calc(25% - 20px);
    min-width: 250px; // Ensures cards do not get too small on smaller screens
    margin: 5px; // Consistent margin for all sides

`;
const Card = styled.div`
    ${tw`flex flex-col items-center px-6 py-10 w-full `}
    border: 2px dashed #0ABD19;
    ${tw`rounded-lg`}
    .imageContainer {
        ${tw`flex justify-center items-center w-full`}
        height: 220px;
        img {
            max-width:  220px;
max-height: 220px;!important;
        }
    }
    .textContainer {
        ${tw`mt-6 text-center w-full`}
    }
    .title {
        ${tw`font-bold text-xl leading-none`}
        color: #243E63;
    }
`;


const cardData = {
    "США": {
        "Детский мир": [
            {imageSrc: Boba, title: "Boba"},
            {imageSrc: BabyAspen, title: "Baby Aspen"},
            {imageSrc: BYNX, title: "BYNXY baby"},
            {imageSrc: Carters, title: "Carter’s"},
            {imageSrc: Cooksk, title: "Cookies Kids"},
            {imageSrc: Cottonon, title: "Cottonon"},
            {imageSrc: Disney, title: "Disney"},
            {imageSrc: FatBrain, title: "Fat Brain Toys"},
            {imageSrc: GapKids, title: "Gap Kids"},
            {imageSrc: Gymboree, title: "Gymboree"},
            {imageSrc: Lego, title: "Lego US"},
            {imageSrc: Lovevery, title: "Lovevery"},
            {imageSrc: OshKosh, title: "OshKosh"},
            {imageSrc: Children, title: "The Children Place"},
            {imageSrc: ToysR, title: "Toys R us"},
            {imageSrc: Zulil, title: "Zulil"}
            // other cards
        ],
        "Здоровье": [
            {imageSrc: BodyBuild, title: "Bodybuilding"},
            {imageSrc: CVS, title: "CVS"},
            {imageSrc: Terrara, title: "doTERRA"},
            {imageSrc: GNS, title: "GNC"},
            {imageSrc: iHerb, title: "iHerb"},
            {imageSrc: LuckyVitamin, title: "Lucky Vitamin"},
            {imageSrc: RiteAid, title: "Rite Aid"},
            {imageSrc: Swanson, title: "Swanson"},
            {imageSrc: ThriveMarket, title: "Thrive Market"},
            {imageSrc: VitaminShoppe, title: "Vitamin Shoppe"},
            {imageSrc: Walgreens, title: "Walgreens"},

            // other cards
        ],
        "Зоотовары": [
            {imageSrc: Bark, title: "Bark"},
            {imageSrc: Chewy, title: "Chewy"},
            {imageSrc: Petco, title: "Petco"},
            {imageSrc: PetSmart, title: "PetSmart"},
        ],
        "Косметика и парфюмерия": [
            {imageSrc: ABH, title: "ABH"},
            {imageSrc: ArmaniBeauty, title: "Armani Beauty"},
            {imageSrc: BathandBodyWorks, title: "Bath and Body Works"},
            {imageSrc: Beautylish, title: "Beautylish"},
            {imageSrc: BobbyBrown, title: "Bobby Brown"},
            {imageSrc: CharlotteTilbury, title: "Charlotte Tilbury"},
            {imageSrc: ColorPOP, title: "ColorPOP"},
            {imageSrc: DermStore, title: "DermStore"},
            {imageSrc: Ecosmetics, title: "Ecosmetics"},
            {imageSrc: EstéeLauder, title: "Estée Lauder"},
            {imageSrc: iHerb, title: "iHerb"},
            {imageSrc: MAC, title: "MAC"},
            {imageSrc: Morphe, title: "Morphe"},
            {imageSrc: Sephora, title: "Sephora"},
            {imageSrc: SkinStore, title: "Skin Store"},
            {imageSrc: Tarte, title: "Tarte"},
            {imageSrc: Thebodyshop, title: "The body shop"},
            {imageSrc: TomFord, title: "Tom Ford"},
            {imageSrc: TooFaced, title: "Too Faced"},
            {imageSrc: Ulta, title: "Ulta"}
        ],
        "Магазины с оплатой криптовалютой": [
            {imageSrc: Amazon, title: "Amazon"},
            {imageSrc: Newegg, title: "Newegg"},
            {imageSrc: Overstock, title: "Overstock"},
            {imageSrc: TheHomeDepot, title: "The Home Depot"},
        ],
        "Маркетплейсы": [
            {imageSrc: Ebay, title: "Ebay"},
            {imageSrc: ETSY, title: "ETSY"},
            {imageSrc: Kohls, title: "Kohl’s"},
            {imageSrc: Mercari, title: "Mercari"},
            {imageSrc: Overstock, title: "Overstock"},
            {imageSrc: Target, title: "Target"},
            {imageSrc: Walmart, title: "Walmart "},
        ],
        "Одежда, обувь, аксессуары": [
            {imageSrc: sixpm, title: "6pm"},
            {imageSrc: Abercrombie, title: "Abercrombie & Fitch"},
            {imageSrc: Adidas, title: "Adidas"},
            {imageSrc: Aeropostale, title: "Aeropostale"},
            {imageSrc: AldoShoes, title: "Aldo Shoes"},
            {imageSrc: AmericanEagle, title: "American Eagle"},
            {imageSrc: ASOS, title: "ASOS"},
            {imageSrc: Cabelas, title: "Cabelas"},
            {imageSrc: COACH, title: "COACH"},
            {imageSrc: Crocs, title: "Crocs"},
            {imageSrc: DSW, title: "DSW"},
            {imageSrc: EddieBauer, title: "Eddie Bauer"},
            {imageSrc: Fashionnova, title: "Fashion nova"},
            {imageSrc: FootLocker, title: "Foot Locker"},
            {imageSrc: Forever21, title: "Forever 21"},
            {imageSrc: Gap, title: "Gap"},
            {imageSrc: HM, title: "H&M"},
            {imageSrc: JCPenney, title: "TJCPenney"},
            {imageSrc: Levis, title: "Levi’s"},
            {imageSrc: Macys, title: "Macy’s"},
            {imageSrc: MassimoDutti, title: "Massimo Dutti"},
            {imageSrc: MichaelKors, title: "Michael Kors"},
            {imageSrc: MissGuided, title: "Miss Guided"},
            {imageSrc: NewBalance, title: "New Balance"},
            {imageSrc: Nike, title: "Nike"},
            {imageSrc: Nordstrom, title: "Nordstrom"},
            {imageSrc: OldNavy, title: "Old Navy "},
            {imageSrc: RalphLauren, title: "Ralph Lauren"},
            {imageSrc: Reebok, title: "Reebok"},
            {imageSrc: Sketchers, title: "Sketchers"},
            {imageSrc: SteveMadden, title: "Steve Madden"},
            {imageSrc: TheNorthFace, title: "The North Face"},
            {imageSrc: Timberland, title: "Timberland"},
            {imageSrc: TommyHilfiger, title: "Tommy Hilfiger"},
            {imageSrc: UGG, title: "UGG"},
            {imageSrc: UnderArmour, title: "Under Armour"},
            {imageSrc: Vans, title: "Vans"},
            {imageSrc: VictoriasSecret, title: "Victoria’s Secret"},
            {imageSrc: Zappos, title: "Zappos"},
            {imageSrc: Zara, title: "Zara"}
        ],
        "Хобби и спорт": [
            {imageSrc: ACADEMY, title: "ACADEMY"},
            {imageSrc: ALOYoga, title: "ALO Yoga"},
            {imageSrc: Cabelas, title: "Cabelas"},
            {imageSrc: DICKSSportingGoods, title: "DICK'S Sporting Goods"},
            {imageSrc: EVO, title: "EVO"},
            {imageSrc: GymShark, title: "GymShark"},
            {imageSrc: JOANN, title: "JOANN"},
            {imageSrc: LULULEMON, title: "LULULEMON"},
            {imageSrc: Michaels, title: "Michaels"},
            {imageSrc: NewBalance, title: "New Balance"},
            {imageSrc: Nike, title: "Nike"},
            {imageSrc: Reebok, title: "Reebok"},
            {imageSrc: SaveDollarStores, title: "Save Dollar Stores"},
            {imageSrc: SCHEELS, title: "SCHEELS"},
            {imageSrc: UnderArmour, title: "Under Armour"},
        ],
        "Электроника": [
            {imageSrc: Apple, title: "Apple"},
            {imageSrc: BH, title: "B&H"},
            {imageSrc: BackMarket, title: "Back Market"},
            {imageSrc: BestBuy, title: "Best Buy"},
            {imageSrc: DELL, title: "DELL"},
            {imageSrc: IROBOT, title: "IROBOT"},
            {imageSrc: Lenovo, title: "Lenovo"},
            {imageSrc: Newegg, title: "Newegg"},
            {imageSrc: Oculus, title: "Oculus"},
            {imageSrc: Samsung, title: "Samsung"},
            {imageSrc: TigerDirect, title: "Tiger Direct"},
            {imageSrc: Walmart, title: "Walmart "},

        ],

    },
    "Турция": {
        "Детский мир": [
            {imageSrc: Ebebek, title: "Ebebek"},
            {imageSrc: Joker, title: "Joker"},
            {imageSrc: Minycenter, title: "Minycenter"},
            {imageSrc: Temel, title: "Temel"},
            {imageSrc: ToyzzShop, title: "Toyzz Shop"},
        ],
        "Здоровье": [
            {imageSrc: Avansas, title: "Avansas"},
            {imageSrc: Hepsiburada, title: "Hepsiburada"},
            {imageSrc: Migros, title: "Migros"},
            {imageSrc: n11, title: "n11"},
        ],
        "Косметика и парфюмерия": [
            {imageSrc: Avon, title: "Avon"},
            {imageSrc: Boyner, title: "Boyner"},
            {imageSrc: Brandroom, title: "Brandroom"},
            {imageSrc: EtatPur, title: "Etat Pur"},
            {imageSrc: Eveshop, title: "Eveshop"},
            {imageSrc: Flavus, title: "Flavus"},
            {imageSrc: HaticeTeyze, title: "Hatice Teyze"},
            {imageSrc: Kokoma, title: "Kokoma"},
            {imageSrc: Naos, title: "Naos"},
            {imageSrc: Oleamea, title: "Oleamea"},
            {imageSrc: Sinoz, title: "Sinoz"},
            {imageSrc: Tbrush, title: "T-brush"},
        ],
        "Маркетплейсы": [
            {imageSrc: A101, title: "A 101"},
            {imageSrc: Avansas, title: "Avansas"},
            {imageSrc: aZall, title: "aZall"},
            {imageSrc: Beymen, title: "Beymen"},
            {imageSrc: Bpazar, title: "Bpazar"},
            {imageSrc: CarrefourSA, title: "Carrefour SA"},
            {imageSrc: ExxeSelection, title: "Exxe Selection"},
            {imageSrc: Gratis, title: "Gratis"},
            {imageSrc: Happy, title: "Happy"},
            {imageSrc: Hepsiburada, title: "Hepsiburada"},
            {imageSrc: Joker, title: "Joker"},
            {imageSrc: Migros, title: "Migros"},
            {imageSrc: Morhipo, title: "Morhipo"},
            {imageSrc: n11, title: "n11"},
            {imageSrc: PttAVM, title: "PttAVM"},
            {imageSrc: Trendyol, title: "Trendyol"},
        ],
        "Одежда, обувь, аксессуары": [
            {imageSrc: Addax, title: "Addax"},
            {imageSrc: Aker, title: "Aker"},
            {imageSrc: Aris, title: "Aris"},
            {imageSrc: Armine, title: "Armine"},
            {imageSrc: Asics, title: "Asics"},
            {imageSrc: Avva, title: "Avva"},
            {imageSrc: AyakkabıDünyası, title: "Ayakkabı Dünyası"},
            {imageSrc: Bershka, title: "Bershka"},
            {imageSrc: Blackspade, title: "Blackspade"},
            {imageSrc: Boyner, title: "Boyner"},
            {imageSrc: Brandroom, title: "Brandroom"},
            {imageSrc: BSL, title: "BSL"},
            {imageSrc: Cacharel, title: "Cacharel"},
            {imageSrc: Camper, title: "Camper"},
            {imageSrc: Colins, title: "Colin's"},
            {imageSrc: Columbia, title: "Columbia"},
            {imageSrc: ÇorapSepeti, title: "Çorap Sepeti"},
            {imageSrc: ÇorapToptancisi, title: "Çorap Toptancisi"},
            {imageSrc: DSdamat, title: "D'S damat"},
            {imageSrc: Desa, title: "Desa"},
            {imageSrc: Dilvin, title: "Dilvin"},
            {imageSrc: Divarese, title: "Divarese"},
            {imageSrc: Elmoda, title: "Elmoda"},
            {imageSrc: EmelPırlanta, title: "Emel Pırlanta"},
            {imageSrc: ExxeSelection, title: "Exxe Selection"},
            {imageSrc: EylulAlyans, title: "Eylul Alyans"},
            {imageSrc: Farfetch, title: "Farfetch"},
            {imageSrc: FashFed, title: "Fash Fed"},
            {imageSrc: Fitmoda, title: "Fitmoda"},
            {imageSrc: Fivescarf, title: "Fivescarf"},
            {imageSrc: Gaptr, title: "Gap (tr)"},
            {imageSrc: Glingerie, title: "Glingerie"},
            {imageSrc: GSStore, title: "GSStore"},
            {imageSrc: Gülaylar, title: "Gülaylar"},
            {imageSrc: Hemington, title: "Hemington"},
            {imageSrc: Hotic, title: "Hotic"},
            {imageSrc: Hummel, title: "Hummel"},
            {imageSrc: iLVi, title: "iLVi"},
            {imageSrc: InterSport, title: "InterSport"},
            {imageSrc: Korayspor, title: "Korayspor"},
            {imageSrc: Koton, title: "Koton"},
            {imageSrc: Kuaybegider, title: "Kuaybegider"},
            {imageSrc: Levidor, title: "Levidor"},
            {imageSrc: LizayPırlanta, title: "Lizay Pırlanta"},
            {imageSrc: Lovemybody, title: "Love my body"},
            {imageSrc: LTBjeans, title: "LTB jeans"},
            {imageSrc: Markastok, title: "Markastok"},
            {imageSrc: MarksSpencer, title: "Marks&Spencer"},
            {imageSrc: Mavi, title: "Mavi"},
            {imageSrc: Modanisa, title: "Modanisa"},
            {imageSrc: MoonSports, title: "Moon Sports"},
            {imageSrc: Mudo, title: "Mudo"},
            {imageSrc: NetWork, title: "NetWork"},
            {imageSrc: NevzatOnay, title: "Nevzat Onay"},
            {imageSrc: Occasion, title: "Occasion"},
            {imageSrc: PierreCardin, title: "Pierre Cardin"},
            {imageSrc: PırlantaMerkezim, title: "Pırlanta Merkezim"},
            {imageSrc: PlaySports, title: "PlaySports"},
            {imageSrc: Pomidik, title: "Pomidik"},
            {imageSrc: PullBear, title: "Pull&Bear"},
            {imageSrc: Puma, title: "Puma"},
            {imageSrc: SaatSaat, title: "Saat&Saat"},
            {imageSrc: SilkandCashmere, title: "Silk and Cashmere"},
            {imageSrc: Skechers, title: "Skechers"},
            {imageSrc: Slazenger, title: "Slazenger"},
            {imageSrc: SneaksCloud, title: "Sneaks Cloud"},
            {imageSrc: Sporjinal, title: "Sporjinal"},
            {imageSrc: Sporthink, title: "Sporthink"},
            {imageSrc: Sportive, title: "Sportive"},
            {imageSrc: Sportstyle, title: "Sportstyle"},
            {imageSrc: SPX, title: "SPX"},
            {imageSrc: Stradivarius, title: "Stradivarius"},
            {imageSrc: SuperStep, title: "SuperStep"},
            {imageSrc: Suwen, title: "Suwen"},
            {imageSrc: Themoosebay, title: "The moose bay"},
            {imageSrc: TommyLife, title: "Tommy Life"},
            {imageSrc: TouchéPrivé, title: "Touché Privé"},
            {imageSrc: Tudors, title: "Tudors"},
            {imageSrc: USPoloASSN, title: "U.S. Polo ASSN."},
            {imageSrc: UnderArmour, title: "Under Armour (tr)"},
            {imageSrc: UnitedColorsofBenetton, title: "United Colors of Benetton"},
            {imageSrc: Yalispor, title: "Yalispor"},
            {imageSrc: Yargici, title: "Yargici"},
        ],
        "Хобби и спорт": [
            {imageSrc: Asics, title: "Asics"},
            {imageSrc: GSStore, title: "GSStore"},
            {imageSrc: InterSport, title: "InterSport"},
            {imageSrc: PlaySports, title: "PlaySports"},
            {imageSrc: Sporjinal, title: "Sporjinal"},
            {imageSrc: Sportive, title: "Sportive"},
            {imageSrc: SPX, title: "SPX"},
            {imageSrc: SuperStep, title: "SuperStep"},
            {imageSrc: UnderArmour, title: "Under Armour (tr)"},
        ],
        "Электроника": [
            {imageSrc: Arçelik, title: "Arçelik"},
            {imageSrc: Beko, title: "Beko"},
            {imageSrc: Braunshop, title: "Braun-shop"},
            {imageSrc: Casper, title: "Casper"},
            {imageSrc: Doremusic, title: "Doremusic"},
            {imageSrc: Fakir, title: "Fakir"},
            {imageSrc: KorkmazStore, title: "Korkmaz Store"},
            {imageSrc: MediaMarkt, title: "MediaMarkt"},
        ]
    }
};
export default ({selectedCountry, selectedCategory}) => {
    const cardsToShow = cardData[selectedCountry]?.[selectedCategory] || [];
    return (
        <Container>
            <ThreeColumnContainer>
                {cardsToShow.map((card, i) => (
                    <Column key={i}>
                        <Card>
                  <span className="imageContainer">
                    <img src={card.imageSrc || defaultCardImage} alt=""/>
                  </span>
                            <span className="textContainer">
                    <span className="title">{card.title}</span>
                  </span>
                        </Card>
                    </Column>
                ))}
            </ThreeColumnContainer>
        </Container>
    );
};
