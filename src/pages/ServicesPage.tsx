import {
  Scale,
  Heart,
  Briefcase,
  Users,
  FileText,
  Home,
  Building2,
  ShoppingCart,
  Shield,
  Laptop,
  HeartPulse,
  FileSignature,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const servicesDetailed = [
  {
    icon: Scale,
    title: "Ceza Hukuku",
    description: "Ceza hukuku alanında kapsamlı hukuki danışmanlık ve temsil hizmetleri sunuyoruz.",
    details: [
      "Soruşturma ve kovuşturma aşamalarında müdafilik",
      "Suç mağduru müvekkillerin hakları ve tazminat talepleri",
      "Ceza davalarında savunma stratejileri geliştirilmesi",
      "İtiraz, temyiz ve karar düzeltme başvuruları",
      "Tutuklama ve tahliye işlemleri",
      "Uzlaşma ve arabuluculuk süreçleri",
      "Görevden doğan suçlar ve devlet memurları hakkında işlemler",
      "Bilirkişi raporlarının incelenmesi ve itiraz",
      "Güvenlik tedbirleri ve infaz hukuku uygulamaları"
    ]
  },
  {
    icon: Heart,
    title: "Aile Hukuku",
    description: "Aile bireyleri arasındaki hukuki ilişkilerde profesyonel destek sağlıyoruz.",
    details: [
      "Anlaşmalı ve çekişmeli boşanma davaları",
      "Velayet, kişisel ilişki kurma ve çocuk teslimi davaları",
      "Nafaka (iştirak, yoksulluk, tedbir) davaları",
      "Mal rejimi ve tasfiye işlemleri",
      "Evlilik öncesi sözleşmeler (prenuptial agreement)",
      "Nişanın bozulmasından kaynaklanan davalar",
      "Soybağı tespiti ve reddi davaları",
      "Evlat edinme süreçleri",
      "Aile içi şiddet ve koruyucu tedbir kararları",
      "Vesayet ve kayyumluk işlemleri"
    ]
  },
  {
    icon: Briefcase,
    title: "Ticaret Hukuku",
    description: "Ticari faaliyetlerde hukuki güvenlik sağlayarak iş süreçlerinizi destekliyoruz.",
    details: [
      "Şirket kuruluşu, birleşme, devir ve infisah işlemleri",
      "Anonim ve limited şirket genel kurul toplantıları",
      "Ticari sözleşmelerin hazırlanması ve incelenmesi",
      "Ortaklık anlaşmazlıkları ve çıkma-çıkarılma davaları",
      "Rekabet hukuku uygulamaları",
      "Franchise ve distribütörlük sözleşmeleri",
      "Ticari alacak tahsilatı ve konkordato süreçleri",
      "Şirket birleşme, devir ve yeniden yapılandırma işlemleri",
      "Ticaret sicili işlemleri ve ticari defter tutma danışmanlığı",
      "Ticari sır ihlalleri ve haksız rekabet davaları"
    ]
  },
  {
    icon: Users,
    title: "İş Hukuku",
    description: "İşçi ve işveren haklarının korunmasında uzman danışmanlık hizmeti veriyoruz.",
    details: [
      "İş sözleşmelerinin hazırlanması ve incelenmesi",
      "İşe iade davaları ve fesih işlemleri",
      "Kıdem ve ihbar tazminatı hesaplamaları ve davaları",
      "Fazla mesai, yıllık izin ve ücret alacakları",
      "Mobbing (psikolojik taciz) davaları",
      "İş kazası ve meslek hastalığı davaları",
      "Rekabet yasağı sözleşmeleri",
      "İş yerinde ayrımcılık ve eşit davranma ilkesi ihlalleri",
      "Toplu iş sözleşmeleri ve grev-lokavt süreçleri",
      "İşveren vekili danışmanlığı ve SGK işlemleri"
    ]
  },
  {
    icon: FileText,
    title: "İcra ve İflas Hukuku",
    description: "Alacaklarınızın tahsili ve borç ilişkilerinde etkili çözümler sunuyoruz.",
    details: [
      "İlamlı ve ilamsız icra takipleri",
      "Haciz, satış ve paylaştırma işlemleri",
      "İhtiyati haciz ve tedbir kararları",
      "Menfi tespit ve istihkak davaları",
      "İflas ve konkordato süreçleri",
      "İcra inkar tazminatı davaları",
      "Kambiyo senetlerine (çek, bono, poliçe) dayalı takipler",
      "Borçtan kurtulma davaları",
      "İcra ve iflas hukukundan kaynaklanan şikayetler",
      "Rehnin paraya çevrilmesi yoluyla takip"
    ]
  },
  {
    icon: Home,
    title: "Miras Hukuku",
    description: "Miras hukukundan kaynaklanan uyuşmazlıklarda hak ve menfaatlerinizi koruyoruz.",
    details: [
      "Veraset ilamı ve mirasçılık belgesi işlemleri",
      "Miras paylaşım davaları (tenkis, iptal)",
      "Vasiyetnamenin hazırlanması ve iptali davaları",
      "Saklı pay ihlali ve tenkis davaları",
      "Mirastan mal kaçırma davaları",
      "Muris muvazaası davaları",
      "Ölünceye kadar bakma sözleşmeleri",
      "Mirasın reddi ve defter tutma işlemleri",
      "Mirasçılık şerhi işlemleri",
      "Miras ortaklığının giderilmesi davaları"
    ]
  },
  {
    icon: Building2,
    title: "Gayrimenkul Hukuku",
    description: "Taşınmaz mal işlemlerinde güvenli ve hukuka uygun süreçler sağlıyoruz.",
    details: [
      "Gayrimenkul alım-satım işlemleri ve sözleşme düzenleme",
      "Tapu iptali ve tescil davaları",
      "İmar hukuku uygulamaları ve kamulaştırma işlemleri",
      "Kira sözleşmelerinin düzenlenmesi ve uyuşmazlıklar",
      "Tahliye davaları ve kiracı hakları",
      "Kat mülkiyeti ve kat irtifakı işlemleri",
      "Ortaklığın giderilmesi (izale-i şuyu) davaları",
      "İrtifak hakkı tesisi ve kaldırma davaları",
      "Aile konutu şerhi ve işgalin önlenmesi davaları",
      "Arsa payı karşılığı inşaat sözleşmeleri"
    ]
  },
  {
    icon: ShoppingCart,
    title: "Tüketici Hukuku",
    description: "Tüketici haklarınızı koruyarak adil ticaret için çalışıyoruz.",
    details: [
      "Ayıplı mal ve hizmetten kaynaklanan uyuşmazlıklar",
      "Tüketici Hakem Heyeti başvuruları",
      "Cayma hakkı ve mesafeli satış sözleşmeleri",
      "Kapıdan satış ve devre tatil sözleşmeleri",
      "Kredili satış ve taksit uyuşmazlıkları",
      "Garanti ve satış sonrası hizmetler",
      "Tüketici lehine haksız şart davaları",
      "Yanıltıcı ve aldatıcı reklamlar",
      "Ön ödemeli konut satışları",
      "Ürün güvenliği ve geri çağırma işlemleri"
    ]
  },
  {
    icon: Shield,
    title: "Sigorta Hukuku",
    description: "Sigorta poliçelerinden kaynaklanan haklarınızı savunuyoruz.",
    details: [
      "Zorunlu mali sorumluluk sigortası (trafik) tazminat davaları",
      "Kasko sigortası hasar tazminat talepleri",
      "Hayat sigortası poliçeleri ve ödemeler",
      "Sağlık sigortası ile ilgili uyuşmazlıklar",
      "DASK (Zorunlu Deprem Sigortası) işlemleri",
      "Rücu davaları ve sigorta şirketleri arası ilişkiler",
      "Sigorta sözleşmelerinin feshi ve iptali",
      "Sigorta eksperlerinin raporlarına itiraz",
      "İşveren mali sorumluluk sigortası",
      "Yangın, hırsızlık ve diğer mülkiyet sigortaları"
    ]
  },
  {
    icon: Laptop,
    title: "Bilişim Hukuku",
    description: "Dijital çağın hukuki gereksinimlerinde öncü çözümler sunuyoruz.",
    details: [
      "Kişisel Verilerin Korunması Kanunu (KVKK) uyum danışmanlığı",
      "Veri ihlali bildirimleri ve yaptırımlar",
      "E-ticaret mevzuatı ve platform sorumlulukları",
      "Elektronik imza ve güvenli elektronik imza uygulamaları",
      "Siber suçlar (dolandırıcılık, hackleme, DDoS) ve davaları",
      "Telif hakkı ihlalleri ve dijital içerik koruması",
      "Domain uyuşmazlıkları ve marka tescil işlemleri",
      "Sosyal medya hukuku ve kişilik hakları ihlalleri",
      "Bulut bilişim sözleşmeleri",
      "Yazılım lisans anlaşmaları ve uyuşmazlıklar"
    ]
  },
  {
    icon: HeartPulse,
    title: "Sağlık Hukuku",
    description: "Sağlık hizmetlerinden kaynaklanan hak ihlallerinde temsil ediyoruz.",
    details: [
      "Tıbbi malpraktis (hatalı tedavi) davaları",
      "Hasta hakları ihlalleri ve şikayetler",
      "Aydınlatılmış onam ve bilgilendirme yükümlülüğü",
      "Sağlık çalışanlarının hakları ve sorumlulukları",
      "Özel hastane ve kamu hastanesi uyuşmazlıkları",
      "Estetik ameliyat komplikasyonları",
      "İlaç ve tıbbi cihaz hatalarından kaynaklanan tazminat",
      "Sağlık kuruluşları mevzuat danışmanlığı",
      "Ruhsat ve izin işlemleri",
      "Sağlık Bakanlığı denetimleri ve cezai yaptırımlar"
    ]
  },
  {
    icon: FileSignature,
    title: "Sözleşmeler Hukuku",
    description: "Her türlü sözleşme hazırlığı ve uyuşmazlık çözümünde uzmanız.",
    details: [
      "Ticari ve özel hukuk sözleşmelerinin hazırlanması",
      "Sözleşmelerin hukuki incelenmesi ve revize edilmesi",
      "Gizlilik sözleşmeleri (NDA) ve rekabet yasağı",
      "Danışmanlık ve hizmet sözleşmeleri",
      "Bayilik, distribütörlük ve franchise sözleşmeleri",
      "İnşaat ve müteahhitlik sözleşmeleri",
      "Taşıma ve lojistik sözleşmeleri",
      "Sözleşme ihlali ve tazminat davaları",
      "Cezai şart ve sözleşme feshi işlemleri",
      "Uluslararası ticari sözleşmeler ve tahkim"
    ]
  }
];

export function ServicesPage() {
  const { t, language } = useLanguage();

  // Dinamik olarak translations'dan hizmet detaylarını çek
  const servicesDetailed = [
    {
      icon: Scale,
      ...t.services.criminalLaw
    },
    {
      icon: Heart,
      ...t.services.familyLaw
    },
    {
      icon: Briefcase,
      ...t.services.commercialLaw
    },
    {
      icon: Users,
      ...t.services.laborLaw
    },
    {
      icon: FileText,
      ...t.services.executionLaw
    },
    {
      icon: Home,
      ...t.services.inheritanceLaw
    },
    {
      icon: Building2,
      ...t.services.realEstateLaw
    },
    {
      icon: ShoppingCart,
      ...t.services.consumerLaw
    },
    {
      icon: Shield,
      ...t.services.insuranceLaw
    },
    {
      icon: Laptop,
      ...t.services.informationLaw
    },
    {
      icon: HeartPulse,
      ...t.services.healthLaw
    },
    {
      icon: FileSignature,
      ...t.services.contractLaw
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--law-navy) 0%, #1a3a5c 100%)`
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            className="mb-6"
            style={{ color: "white", fontSize: "2.5rem", fontWeight: "700" }}
          >
            {t.services.title}
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "var(--law-blue)", fontSize: "1.25rem" }}
          >
            {t.services.description}
          </p>
        </div>
      </section>

      {/* Services Detailed */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: `linear-gradient(180deg, #f0f4f8 0%, white 50%, #f0f4f8 100%)` }}
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {servicesDetailed.map((service, index) => (
            <div
              key={index}
              className="rounded-lg p-8 shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--law-bg)" }}
                >
                  <service.icon
                    size={32}
                    style={{ color: "var(--law-gold)" }}
                  />
                </div>
                <div className="flex-1">
                  <h2
                    className="mb-3"
                    style={{ color: "var(--law-navy)" }}
                  >
                    {service.title}
                  </h2>
                  <p style={{ color: "var(--law-text)" }}>
                    {service.description}
                  </p>
                </div>
              </div>

              <div
                className="h-1 mb-6"
                style={{ backgroundColor: "var(--law-gold)", opacity: 0.3 }}
              />

              <div className="grid md:grid-cols-2 gap-4">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="flex-shrink-0 mt-1"
                      style={{ color: "var(--law-gold)" }}
                    />
                    <p style={{ color: "var(--law-text)" }}>
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: `linear-gradient(135deg, var(--law-navy) 0%, #1a3a5c 100%)`
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-6"
            style={{ color: "white" }}
          >
            {language === 'tr'
              ? 'Hukuki Danışmanlık İhtiyacınız mı Var?'
              : 'Do You Need Legal Consultancy?'}
          </h2>
          <p
            className="mb-8"
            style={{ color: "var(--law-blue)", fontSize: "1.125rem" }}
          >
            {language === 'tr'
              ? 'Uzman kadromuz, sizin için en uygun çözümü bulmaya hazır. Hemen bizimle iletişime geçin.'
              : 'Our expert team is ready to find the most suitable solution for you. Contact us now.'}
          </p>
          <a
            href="/iletisim"
            className="inline-block px-8 py-4 rounded-lg transition-all hover:shadow-2xl transform hover:-translate-y-1"
            style={{
              backgroundColor: "var(--law-gold)",
              color: "white"
            }}
          >
            {language === 'tr' ? 'İletişime Geçin' : 'Get in Touch'}
          </a>
        </div>
      </section>
    </div>
  );
}
