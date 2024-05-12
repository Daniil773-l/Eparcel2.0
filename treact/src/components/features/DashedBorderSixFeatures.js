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
import Macys  from "../../images/Brands/Macys.svg"

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
const Card = styled.a`
    ${tw`flex flex-col items-center px-6 py-10 w-full no-underline`}
    border: 2px dashed #0ABD19;
    ${tw`rounded-lg`}
    .imageContainer {
        ${tw`flex justify-center items-center w-full`}
        height: 220px;
        img {
            max-width: 220px;
            max-height: 220px;
        }
    }
    .textContainer {
        ${tw`mt-6 text-center w-full`}
    }
    .title {
        ${tw`font-bold text-xl leading-none text-black`}
        color: #243E63;
    }
    &:hover {
        text-decoration: none; // Removes underline on hover if needed
    }
`;


const cardData = {
    "США": {
        "Детский мир": [
            {imageSrc: Boba, title: "Boba",url:"https://boba.com/"},
            {imageSrc: BabyAspen, title: "Baby Aspen",url:"https://www.babyaspen.com/"},
            {imageSrc: BYNX, title: "BYNXY baby",url:"https://binxybaby.com/"},
            {imageSrc: Carters, title: "Carter’s",url:"https://www.carters.com/"},
            {imageSrc: Cooksk, title: "Cookies Kids",url:"https://www.cookieskids.com/"},
            {imageSrc: Cottonon, title: "Cottonon",url: "https://cottonon.com/AU/"},
            {imageSrc: Disney, title: "Disney",url: "https://www.disneystore.com/"},
            {imageSrc: FatBrain, title: "Fat Brain Toys",url: "https://www.fatbraintoyco.com/"},
            {imageSrc: GapKids, title: "Gap Kids",url: "https://www.gap.com/browse/division.do?cid=6170"},
            {imageSrc: Gymboree, title: "Gymboree",url:"https://www.gymboree.com/us/home"},
            {imageSrc: Lego, title: "Lego US",url: "https://www.lego.com/en-us"},
            {imageSrc: Lovevery, title: "Lovevery",url: "https://lovevery.com/"},
            {imageSrc: OshKosh, title: "OshKosh",url: "https://www.carters.com/oshkosh"},
            {imageSrc: Children, title: "The Children Place",url:"https://www.childrensplace.com/us/home"},
            {imageSrc: ToysR, title: "Toys R us",url: "https://www.toysrus.com/"},
            {imageSrc: Zulil, title: "Zulil",url: "https://www.zulily.com/password"},
            // other cards
        ],
        "Здоровье": [
            {imageSrc: BodyBuild, title: "Bodybuilding",url:"https://shop.bodybuilding.com/"},
            {imageSrc: CVS, title: "CVS",url: "https://www.cvs.com/international.html"},
            {imageSrc: Terrara, title: "doTERRA",url: "https://www.doterra.com/US/en"},
            {imageSrc: GNS, title: "GNC",url: "https://www.gnc.com/"},
            {imageSrc: iHerb, title: "iHerb",url: "https://kz.iherb.com/"},
            {imageSrc: LuckyVitamin, title: "Lucky Vitamin",url: "https://www.fruitfulyield.com/brand/lucky-vitamin?redirectsrc=luckyvitamin.com"},
            {imageSrc: RiteAid, title: "Rite Aid",url: "https://www.riteaid.com/"},
            {imageSrc: Swanson, title: "Swanson",url: "https://swansoneurope.com/fr/"},
            {imageSrc: ThriveMarket, title: "Thrive Market",url: "https://www.thrivemarket.com/"},
            {imageSrc: VitaminShoppe, title: "Vitamin Shoppe",url: "https://www.vitaminshoppe.com/"},
            {imageSrc: Walgreens, title: "Walgreens",url: "https://walgreens.com/"},

            // other cards
        ],
        "Зоотовары": [
            {imageSrc: Bark, title: "Bark",url:"https://bark.com/"},
            {imageSrc: Chewy, title: "Chewy",url:"https://chewy.com"},
            {imageSrc: Petco, title: "Petco",url:"https://petco.com"},
            {imageSrc: PetSmart, title: "PetSmart",url:"http://www.petsmart.com/"},
        ],
        "Косметика и парфюмерия": [
            {imageSrc: ABH, title: "ABH",url: "https://www.anastasiabeverlyhills.com/"},
            {imageSrc: ArmaniBeauty, title: "Armani Beauty",url: "https://armanibeauty.com"},
            {imageSrc: BathandBodyWorks, title: "Bath and Body Works",url:"https://www.bathandbodyworks.com/"},
            {imageSrc: Beautylish, title: "Beautylish",url:"https://www.beautylish.com"},
            {imageSrc: BobbyBrown, title: "Bobby Brown",url:"https://m.bobbibrowncosmetics.com/"},
            {imageSrc: CharlotteTilbury, title: "Charlotte Tilbury",url:"https://charlotteTilbury.com"},
            {imageSrc: ColorPOP, title: "ColorPOP",url:"https://colourpop.com/"},
            {imageSrc: DermStore, title: "DermStore",url: "https://www.dermstore.com/"},
            {imageSrc: Ecosmetics, title: "Ecosmetics",url:"https://www.ecosmetics.com"},
            {imageSrc: EstéeLauder, title: "Estée Lauder",url: "https://www.esteelauder.com/"},
            {imageSrc: iHerb, title: "iHerb",url: "https://kz.iherb.com/"},
            {imageSrc: MAC, title: "MAC",url: "https://www.maccosmetics.com/"},
            {imageSrc: Morphe, title: "Morphe",url: "https://www.morphe.com/"},
            {imageSrc: Sephora, title: "Sephora",url: "https://sephora.com"},
            {imageSrc: SkinStore, title: "Skin Store",url: "https://www.skinstore.com/"},
            {imageSrc: Tarte, title: "Tarte",url: "https://tarte.com"},
            {imageSrc: Thebodyshop, title: "The body shop",url: "https://thebodyshop.com/"},
            {imageSrc: TomFord, title: "Tom Ford",url: "https://www.tomfordbeauty.com/"},
            {imageSrc: TooFaced, title: "Too Faced",url: "https://www.toofaced.com/"},
            {imageSrc: Ulta, title: "Ulta",url: "https://www.ulta.com"},
        ],
        "Магазины с оплатой криптовалютой": [
            {imageSrc: Amazon, title: "Amazon",url:"https://www.amazon.com/"},
            {imageSrc: Newegg, title: "Newegg",url:"https://newegg.com"},
            {imageSrc: Overstock, title: "Overstock",url:"https://overstock.com"},
            {imageSrc: TheHomeDepot, title: "The Home Depot",url:"https://theHomeDepot.com"},
        ],
        "Маркетплейсы": [
            {imageSrc: Ebay, title: "Ebay",url:"https://www.ebay.com/"},
            {imageSrc: ETSY, title: "ETSY",url:"https://www.etsy.com/"},
            {imageSrc: Kohls, title: "Kohl’s",url:"https://kohls.com"},
            {imageSrc: Mercari, title: "Mercari",url:"https://mercari.com"},
            {imageSrc: Overstock, title: "Overstock",url:"https://overstock.com"},
            {imageSrc: Target, title: "Target",url: "https://www.target.com/"},
            {imageSrc: Walmart, title: "Walmart",url:"https://walmart.com"},
        ],
        "Одежда, обувь, аксессуары": [
            {imageSrc: sixpm, title: "6pm",url:"https://www.6pm.com/"},
            {imageSrc: Abercrombie, title: "Abercrombie & Fitch",url:"https://www.abercrombie.com/shop/wd"},
            {imageSrc: Adidas, title: "Adidas",url:"https://www.adidas.com/us"},
            {imageSrc: Aeropostale, title: "Aeropostale",url:"https://www.aeropostale.com/"},
            {imageSrc: AldoShoes, title: "Aldo Shoes",url:"https://www.aldoshoes.com/us/en_US"},
            {imageSrc: AmericanEagle, title: "American Eagle",url:"https://www.ae.com/us/en"},
            {imageSrc: ASOS, title: "ASOS",url:"https://www.asos.com/us/"},
            {imageSrc: Cabelas, title: "Cabelas",url:"https://www.cabelas.com/shop/en#"},
            {imageSrc: COACH, title: "COACH",url:"https://coach.com"},
            {imageSrc: Crocs, title: "Crocs",url:"https://crocs.com"},
            {imageSrc: DSW, title: "DSW",url:"https://www.dsw.com"},
            {imageSrc: EddieBauer, title: "Eddie Bauer",url: "https://www.eddiebauer.com/"},
            {imageSrc: Fashionnova, title: "Fashion nova",url:"https://www.fashionnova.com"},
            {imageSrc: FootLocker, title: "Foot Locker",url:"https://www.footlocker.co.uk/"},
            {imageSrc: Forever21, title: "Forever 21",url: "https://www.forever21.com/"},
            {imageSrc: Gap, title: "Gap",url:"https://www.gap.com/"},
            {imageSrc: HM, title: "H&M",url:"https://hm.com"},
            {imageSrc: JCPenney, title: "TJCPenney",url:"https://www.tJCPenney.com"},
            {imageSrc: Levis, title: "Levi’s",url:"https://www.levis.com"},
            {imageSrc: Macys, title: "Macy’s",url:"https://www.macys.com/"},
            {imageSrc: MassimoDutti, title: "Massimo Dutti",url: "https://www.massimodutti.com/us"},
            {imageSrc: MichaelKors, title: "Michael Kors",url:"https://www.michaelkors.global/kz/en/"},
            {imageSrc: MissGuided, title: "Miss Guided",url:"https://www.missguided.com/us"},
            {imageSrc: NewBalance, title: "New Balance",url:"https://www.newbalance.com"},
            {imageSrc: Nike, title: "Nike",url: "https://www.nike.com/"},
            {imageSrc: Nordstrom, title: "Nordstrom",url:"https://www.nordstrom.com"},
            {imageSrc: OldNavy, title: "Old Navy ",url:"https://oldnavy.gap.com/"},
            {imageSrc: RalphLauren, title: "Ralph Lauren",url:"https://ralphlauren.com"},
            {imageSrc: Reebok, title: "Reebok",url:"https://www.reebok.ru/"},
            {imageSrc: Sketchers, title: "Sketchers",url:"https://www.sketchers.com"},
            {imageSrc: SteveMadden, title: "Steve Madden",url:"https://www.stevemadden.com"},
            {imageSrc: TheNorthFace, title: "The North Face",url:"https://www.theNorthFace.com"},
            {imageSrc: Timberland, title: "Timberland",url:"https://timberland.com"},
            {imageSrc: TommyHilfiger, title: "Tommy Hilfiger",url: "https://usa.tommy.com/en"},
            {imageSrc: UGG, title: "UGG",url:"https://UGG.com"},
            {imageSrc: UnderArmour, title: "Under Armour",url:"https://www.underarmour.com/en-us/"},
            {imageSrc: Vans, title: "Vans",url:"https://www.vans.com"},
            {imageSrc: VictoriasSecret, title: "Victoria’s Secret",url:"https://www.victoriassecret.com/us/"},
            {imageSrc: Zappos, title: "Zappos",url:"https://www.zappos.com"},
            {imageSrc: Zara, title: "Zara",url:"https://www.zara.com"},
        ],
        "Хобби и спорт": [
            {imageSrc: ACADEMY, title: "ACADEMY",url:"https://www.academy.com/"},
            {imageSrc: ALOYoga, title: "ALO Yoga",url:"https://www.aloyoga.com"},
            {imageSrc: Cabelas, title: "Cabelas",url:"https://www.cabelas.com/shop/en#"},
            {imageSrc: DICKSSportingGoods, title: "DICK'S Sporting Goods",url: "https://www.dickssportinggoods.com/"},
            {imageSrc: EVO, title: "EVO",url: "https://www.evo.com/"},
            {imageSrc: GymShark, title: "GymShark",url:"https://www.gymshark.com"},
            {imageSrc: JOANN, title: "JOANN",url:"https://www.joann.com"},
            {imageSrc: LULULEMON, title: "LULULEMON",url:"https://www.lululemon.com"},
            {imageSrc: Michaels, title: "Michaels",url:"https://michaels.com"},
            {imageSrc: NewBalance, title: "New Balance",url: "https://www.newbalance.com/"},
            {imageSrc: Nike, title: "Nike",url:"https://nike.com"},
            {imageSrc: Reebok, title: "Reebok",url:"https://www.reebok.ru/"},
            {imageSrc: SaveDollarStores, title: "Save Dollar Stores",url:"https://www.saveDollarStores.com"},
            {imageSrc: SCHEELS, title: "SCHEELS",url: "https://www.scheels.com/"},
            {imageSrc: UnderArmour, title: "Under Armour",url:"https://www.underarmour.com/en-us/"},
        ],
        "Электроника": [
            {imageSrc: Apple, title: "Apple",url:"https://www.apple.com/"},
            {imageSrc: BH, title: "B&H",url: "https://www.bhphotovideo.com/"},
            {imageSrc: BackMarket, title: "Back Market",url:"https://www.backmarket.com"},
            {imageSrc: BestBuy, title: "Best Buy",url:"https://www.bestbuy.com"},
            {imageSrc: DELL, title: "DELL",url: "https://www.dell.com/en-us"},
            {imageSrc: IROBOT, title: "IROBOT",url:"https://www.iROBOT.com"},
            {imageSrc: Lenovo, title: "Lenovo",url:"https://www.lenovo.com"},
            {imageSrc: Newegg, title: "Newegg",url:"https://newegg.com"},
            {imageSrc: Oculus, title: "Oculus",url:"https://oculus.com"},
            {imageSrc: Samsung, title: "Samsung",url:"https://www.samsung.com"},
            {imageSrc: TigerDirect, title: "Tiger Direct",url:"https://www.tigerDirect.com"},
            {imageSrc: Walmart, title: "Walmart ",url:"https://walmart.com/"},

        ],

    },
    "Турция": {
        "Детский мир": [
            {imageSrc: Ebebek, title: "Ebebek",url:"https://www.ebebek.com"},
            {imageSrc: Joker, title: "Joker",url:"https://www.joker.com.tr/"},
            {imageSrc: Minycenter, title: "Minycenter",url:"https://www.minycenter.com.tr/"},
            {imageSrc: Temel, title: "Temel",url: "https://www.temel.com.tr/"},
            {imageSrc: ToyzzShop, title: "Toyzz Shop",url:"https://www.toyzzshop.com"},
        ],
        "Здоровье": [
            {imageSrc: Avansas, title: "Avansas",url:"https://www.avansas.com/"},
            {imageSrc: Hepsiburada, title: "Hepsiburada",url:"https://www.hepsiburada.com/"},
            {imageSrc: Migros, title: "Migros",url: "https://www.migros.com.tr/"},
            {imageSrc: n11, title: "n11",url:"https://www.n11.com.tr/"},
        ],
        "Косметика и парфюмерия": [
            {imageSrc: Avon, title: "Avon",url:"https://kozmetik.avon.com.tr/"},
            {imageSrc: Boyner, title: "Boyner",url:"https://boyner.com.tr/"},
            {imageSrc: Brandroom, title: "Brandroom",url:"https://www.brandroom.com.tr/"},
            {imageSrc: EtatPur, title: "Etat Pur",url:"https://etatpur.com.tr/"},
            {imageSrc: Eveshop, title: "Eveshop",url:"https://eveshop.com.tr/"},
            {imageSrc: Flavus, title: "Flavus",url:"https://flavus.com/"},
            {imageSrc: HaticeTeyze, title: "Hatice Teyze",url:"https://www.haticeteyze.com/"},
            {imageSrc: Kokoma, title: "Kokoma",url:"https://www.kokoma.com.tr/"},
            {imageSrc: Naos, title: "Naos",url:"https://naos.com/tr/"},
            {imageSrc: Oleamea, title: "Oleamea",url:"https://oleamea.com.tr/"},
            {imageSrc: Sinoz, title: "Sinoz",url:"https://www.sinoz.com.tr/"},
            {imageSrc: Tbrush, title: "T-brush",url: "https://thetbrush.com/"},
        ],
        "Маркетплейсы": [
            {imageSrc: A101, title: "A 101",url:"https://www.a101.com.tr/"},
            {imageSrc: Avansas, title: "Avansas",url:"https://www.avansas.com.tr/"},
            {imageSrc: aZall, title: "aZall",url:"https://www.azall.com/"},
            {imageSrc: Beymen, title: "Beymen",url:"https://www.beymen.com.tr/"},
            {imageSrc: Bpazar, title: "Bpazar",url:"https://bpazar.com/"},
            {imageSrc: CarrefourSA, title: "Carrefour SA",url:"https://www.carrefour.com/"},
            {imageSrc: ExxeSelection, title: "Exxe Selection",url:"https://www.exxe.com.tr/"},
            {imageSrc: Gratis, title: "Gratis",url: "https://www.gratis.com/"},
            {imageSrc: Happy, title: "Happy",url:"https://www.happy.com.tr/"},
            {imageSrc: Hepsiburada, title: "Hepsiburada",url:"https://hepsiburada.com.tr/"},
            {imageSrc: Joker, title: "Joker"},
            {imageSrc: Migros, title: "Migros",url:"https://migros.com.tr/"},
            {imageSrc: Morhipo, title: "Morhipo",url:"https://www.boyner.com.tr/"},
            {imageSrc: n11, title: "n11",url:"https://www.n11.com.tr/"},
            {imageSrc: PttAVM, title: "PttAVM",url:"https://www.pttavm.com/"},
            {imageSrc: Trendyol, title: "Trendyol",url:"https://www.trendyol.com.tr/"},
        ],
        "Одежда, обувь, аксессуары": [
            {imageSrc: Addax, title: "Addax",url:"https://www.addax.com.tr/"},
            {imageSrc: Aker, title: "Aker",url:"https://www.aker.com.tr/"},
            {imageSrc: Aris, title: "Aris",url:"https://www.arisdiamond.com/"},
            {imageSrc: Armine, title: "Armine",url:"https://www.armine.com/"},
            {imageSrc: Asics, title: "Asics",url:"https://www.asics.com.tr/"},
            {imageSrc: Avva, title: "Avva",url:"https://www.avva.com.tr/"},
            {imageSrc: AyakkabıDünyası, title: "Ayakkabı Dünyası",url:"https://www.ayakkabidunyasi.com.tr/"},
            {imageSrc: Bershka, title: "Bershka",url:"https://www.bershka.com/tr/"},
            {imageSrc: Blackspade, title: "Blackspade",url:"https://www.blackspade.com.tr/"},
            {imageSrc: Boyner, title: "Boyner",url:"https://www.boyner.com.tr/"},
            {imageSrc: Brandroom, title: "Brandroom",url:"https://www.brandroom.com.tr/"},
            {imageSrc: BSL, title: "BSL",url:"https://www.bsl.com.tr/"},
            {imageSrc: Cacharel, title: "Cacharel",url:"https://www.cacharel.com.tr/"},
            {imageSrc: Camper, title: "Camper",url:"https://www.camper.com.tr/"},
            {imageSrc: Colins, title: "Colin's",url: "https://www.colins.com.tr/"},
            {imageSrc: Columbia, title: "Columbia",url:"https://www.columbia.com.tr/"},
            {imageSrc: ÇorapSepeti, title: "Çorap Sepeti",url: "https://www.corapsepeti.com/"},
            {imageSrc: ÇorapToptancisi, title: "Çorap Toptancisi",url: "https://www.coraptoptancisi.com/"},
            {imageSrc: DSdamat, title: "D'S damat",url:"https://www.dsdamat.com/"},
            {imageSrc: Desa, title: "Desa",url:"https://www.desa.com.tr/"},
            {imageSrc: Dilvin, title: "Dilvin",url:"https://www.dilvin.com.tr/"},
            {imageSrc: Divarese, title: "Divarese",url:"https://www.divarese.com.tr/"},
            {imageSrc: Elmoda, title: "Elmoda",url:"https://www.elmoda.com.tr/"},
            {imageSrc: EmelPırlanta, title: "Emel Pırlanta",url:"https://www.emelpirlanta.com/"},
            {imageSrc: ExxeSelection, title: "Exxe Selection",url:"https://www.exxeselection.com/"},
            {imageSrc: EylulAlyans, title: "Eylul Alyans",url:"https://www.eylulalyans.com/"},
            {imageSrc: Farfetch, title: "Farfetch",url:"https://www.farfetch.com/tr/"},
            {imageSrc: FashFed, title: "Fash Fed",url: "https://www.fashfed.com/"},
            {imageSrc: Fitmoda, title: "Fitmoda",url:"https://www.fitmoda.com/"},
            {imageSrc: Fivescarf, title: "Fivescarf",url:"https://www.fivescarf.com/"},
            {imageSrc: Gaptr, title: "Gap (tr)",url:"https://gap.com.tr/"},
            {imageSrc: Glingerie, title: "Glingerie",url:"https://www.glingerie.com/"},
            {imageSrc: GSStore, title: "GSStore",url:"https://www.gsstore.org/"},
            {imageSrc: Gülaylar, title: "Gülaylar",url: "https://www.gulaylar.com/"},
            {imageSrc: Hemington, title: "Hemington",url:"https://www.hemington.com.tr/"},
            {imageSrc: Hotic, title: "Hotic",url:"https://www.hotic.com.tr/"},
            {imageSrc: Hummel, title: "Hummel",url: "https://hummel.com.tr/"},
            {imageSrc: iLVi, title: "iLVi",url:"https://www.ilvi.com/ru"},
            {imageSrc: InterSport, title: "InterSport",url:"https://www.intersport.com.tr/"},
            {imageSrc: Korayspor, title: "Korayspor",url:"https://www.korayspor.com/"},
            {imageSrc: Koton, title: "Koton",url: "https://www.koton.com/"},
            {imageSrc: Kuaybegider, title: "Kuaybegider",url:"https://www.kuaybegider.com/"},
            {imageSrc: Levidor, title: "Levidor",url:"https://www.levidor.com.tr/"},
            {imageSrc: LizayPırlanta, title: "Lizay Pırlanta",url:"https://www.lizaypirlanta.com/"},
            {imageSrc: Lovemybody, title: "Love my body",url:"https://www.lovemybody.com.tr/"},
            {imageSrc: LTBjeans, title: "LTB jeans",url: "https://www.ltbjeans.com/tr-TR"},
            {imageSrc: Markastok, title: "Markastok",url:"https://markastok.com/"},
            {imageSrc: MarksSpencer, title: "Marks&Spencer",url:"https://www.marksandspencer.com.tr/"},
            {imageSrc: Mavi, title: "Mavi",url:"https://www.mavicompany.com/en"},
            {imageSrc: Modanisa, title: "Modanisa",url:"https://www.modanisa.com/"},
            {imageSrc: MoonSports, title: "Moon Sports",url: "https://www.moonsports.com.tr/"},
            {imageSrc: Mudo, title: "Mudo",url:"https://www.mudo.com.tr/"},
            {imageSrc: NetWork, title: "NetWork",url:"https://www.network.com.tr/"},
            {imageSrc: NevzatOnay, title: "Nevzat Onay",url:"https://nevzatOnay.com.tr/"}   ,
            {imageSrc: Occasion, title: "Occasion",url: "https://www.occasion.com.tr/"},
            {imageSrc: PierreCardin, title: "Pierre Cardin",url:"https://pierrecardin.com.tr/"},
            {imageSrc: PırlantaMerkezim, title: "Pırlanta Merkezim",url: "https://www.pirlantamerkezim.com/"},
            {imageSrc: PlaySports, title: "PlaySports",url:"https://www.playsports.com.tr/"},
            {imageSrc: Pomidik, title: "Pomidik",url: "https://pomidik.com/"},
            {imageSrc: PullBear, title: "Pull&Bear",url:"https://www.pullandbear.com/tr/"},
            {imageSrc: Puma, title: "Puma",url:"https://tr.puma.com/"},
            {imageSrc: SaatSaat, title: "Saat&Saat",url:"https://www.saatvesaat.com.tr/"},
            {imageSrc: SilkandCashmere, title: "Silk and Cashmere",url:"https://silkandcashmere.com/"},
            {imageSrc: Skechers, title: "Skechers",url: "https://www.skechers.com.tr/"},
            {imageSrc: Slazenger, title: "Slazenger",url:"https://www.slazenger.com.tr/"},
            {imageSrc: SneaksCloud, title: "Sneaks Cloud",url:"https://www.sneakscloud.com/"},
            {imageSrc: Sporjinal, title: "Sporjinal",url:"https://www.sporjinal.com/"},
            {imageSrc: Sporthink, title: "Sporthink",url:"https://www.sporthink.com/"},
            {imageSrc: Sportive, title: "Sportive",url: "https://www.sportive.com.tr/"},
            {imageSrc: Sportstyle, title: "Sportstyle",url:"https://www.sportstyle.com.tr/"},
            {imageSrc: SPX, title: "SPX",url:"https://www.spx.com.tr/"},
            {imageSrc: Stradivarius, title: "Stradivarius",url:"https://www.stradivarius.com/tr/"},
            {imageSrc: SuperStep, title: "SuperStep",url: "https://www.superstep.com.tr/"},
            {imageSrc: Suwen, title: "Suwen",url:"https://www.suwen.com.tr/"},
            {imageSrc: Themoosebay, title: "The moose bay",url:"https://www.themoosebay.com/"},
            {imageSrc: TommyLife, title: "Tommy Life",url: "https://www.tommylife.com.tr/"},
            {imageSrc: TouchéPrivé, title: "Touché Privé",url: "https://eu.toucheprive.com/"},
            {imageSrc: Tudors, title: "Tudors",url:"https://www.tudors.com/"},
            {imageSrc: USPoloASSN, title: "U.S. Polo ASSN.",url:"https://tr.uspoloassn.com/"},
            {imageSrc: UnderArmour, title: "Under Armour (tr)",url: "https://www.underarmour.com.tr/"},
            {imageSrc: UnitedColorsofBenetton, title: "United Colors of Benetton",url:"https://tr.benetton.com/"},
            {imageSrc: Yalispor, title: "Yalispor",url:"https://www.yalispor.com.tr/"},
            {imageSrc: Yargici, title: "Yargici",url:"https://www.yargici.com/"},
        ],
        "Хобби и спорт": [
            {imageSrc: Asics, title: "Asics",url:"https://www.asics.com.tr/"},
            {imageSrc: GSStore, title: "GSStore",url:"https://www.gsstore.org/"},
            {imageSrc: InterSport, title: "InterSport",url:"https://www.intersport.com/"},
            {imageSrc: PlaySports, title: "PlaySports",url: "https://www.playsports.com.tr/"},
            {imageSrc: Sporjinal, title: "Sporjinal",url:"https://www.sporjinal.com/"},
            {imageSrc: Sportive, title: "Sportive",url:"https://www.sportive.com.tr/"},
            {imageSrc: SPX, title: "SPX",url:"https://www.spx.com.tr/"},
            {imageSrc: SuperStep, title: "SuperStep",url:"https://www.superstep.com.tr/"},
            {imageSrc: UnderArmour, title: "Under Armour (tr)",url: "https://www.underarmour.com.tr/"},
        ],
        "Электроника": [
            {imageSrc: Arçelik, title: "Arçelik",url:"https://www.arcelik.com.tr/"},
            {imageSrc: Beko, title: "Beko",url:"https://www.beko.com.tr/"},
            {imageSrc: Braunshop, title: "Braun-shop",url: "https://www.braunshop.com.tr/"},
            {imageSrc: Casper, title: "Casper",url:"https://casper.com/"},
            {imageSrc: Doremusic, title: "Doremusic",url:  "https://www.doremusic.com.tr/"},
            {imageSrc: Fakir, title: "Fakir",url:"https://www.fakir.com.tr/"},
            {imageSrc: KorkmazStore, title: "Korkmaz Store",url: "https://www.korkmazstore.com.tr/"},
            {imageSrc: MediaMarkt, title: "MediaMarkt",url:"https://mediamarkt.com.tr/"},
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
                        <Card href={card.url} target="_blank" rel="noopener noreferrer">
                            <span className="imageContainer">
                                <img src={card.imageSrc || defaultCardImage} alt={card.title}/>
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
