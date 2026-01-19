import { CategoryMenu } from "@/widgets/catalog/CategoryMenu";
import {
  HomeRightSection,
  ViewedProducts,
  SimpleProducts,
  CategoryProducts,
  VideoReviews,
  QrCodeSection,
  ServicesSection,
  Footer,
  Categories,
  Copyright,
} from "@/widgets/home";

const simpleProducts = [
  { id: "sp-1", title: "Смартфон Apple iPhone 16 Pro Max 256GB", oldPrice: 52599, price: 51099 },
  { id: "sp-2", title: "Смартфон Samsung Galaxy S25 Ultra 512GB", oldPrice: 49999, price: 47999 },
  { id: "sp-3", title: "Ноутбук MacBook Pro 14 M3 Pro", oldPrice: 89999, price: 84999 },
  { id: "sp-4", title: "Телевізор Samsung QLED 65", oldPrice: 69999, price: 64999 },
  { id: "sp-5", title: "Холодильник Samsung Side-by-Side", oldPrice: 79999, price: 74999 },
];

const smartphones = [
  { id: "sm-1", title: "Смартфон Apple iPhone 16 Pro Max 256GB", oldPrice: 52599, price: 51099 },
  { id: "sm-2", title: "Смартфон Samsung Galaxy S25 Ultra 512GB", oldPrice: 49999, price: 47999 },
  { id: "sm-3", title: "Смартфон Xiaomi 14 Ultra 256GB", oldPrice: 39999, price: 37999 },
  { id: "sm-4", title: "Смартфон Google Pixel 8 Pro 256GB", oldPrice: 44999, price: 42999 },
  { id: "sm-5", title: "Смартфон OnePlus 12 512GB", oldPrice: 34999, price: 32999 },
];

const fridges = [
  { id: "fr-1", title: "Холодильник Samsung Side-by-Side 623L", oldPrice: 79999, price: 74999 },
  { id: "fr-2", title: "Холодильник LG InstaView Door-in-Door", oldPrice: 89999, price: 84999 },
  { id: "fr-3", title: "Холодильник Bosch Serie 6 NoFrost", oldPrice: 69999, price: 64999 },
  { id: "fr-4", title: "Холодильник Beko CNK 33520", oldPrice: 49999, price: 44999 },
  { id: "fr-5", title: "Холодильник Indesit ITR 5200 W", oldPrice: 39999, price: 34999 },
];

const laptops = [
  { id: "lp-1", title: "Ноутбук MacBook Pro 14 M3 Pro 1TB", oldPrice: 89999, price: 84999 },
  { id: "lp-2", title: "Ноутбук ASUS ROG Strix G16", oldPrice: 79999, price: 74999 },
  { id: "lp-3", title: "Ноутбук Lenovo ThinkPad X1 Carbon", oldPrice: 69999, price: 64999 },
  { id: "lp-4", title: "Ноутбук HP Spectre x360 14", oldPrice: 59999, price: 54999 },
  { id: "lp-5", title: "Ноутбук Dell XPS 15 OLED", oldPrice: 89999, price: 84999 },
];

export default function Home() {
  return (
    <div>
      <section className="pt-0" style={{ paddingBottom: '10px' }}>
        <div className="mx-auto w-full max-w-[1414px] px-0" style={{ paddingLeft: '10px' }}>
          <div className="grid lg:grid-cols-[320px_auto]" style={{ gap: '10px' }}>
            <div className="hidden lg:block" style={{ marginTop: '10px' }}>
              <div className="rounded-lg border border-black/10 bg-white/80" style={{ width: '320px', height: '602px', padding: '0' }}>
                <CategoryMenu />
              </div>
            </div>
            <div className="hidden lg:block" style={{ marginTop: '10px' }}>
              <HomeRightSection />
            </div>
          </div>
        </div>
      </section>

      <ViewedProducts />

      <SimpleProducts products={simpleProducts} />

      <CategoryProducts title="Смартфоны" products={smartphones} cardWidth={272} cardHeight={516} showPlaceholder={false} />

      <CategoryProducts title="Холодильники" products={fridges} cardWidth={272} cardHeight={516} showPlaceholder={true} placeholderWidth={271} placeholderHeight={510} placeholderPosition="left" />

      <CategoryProducts title="Ноутбуки" products={laptops} cardWidth={272} cardHeight={516} showPlaceholder={true} placeholderWidth={271} placeholderHeight={510} />

      <VideoReviews />

      <QrCodeSection />

      <ServicesSection />

      <Footer />

      <Categories />

      <Copyright />
    </div>
  );
}
