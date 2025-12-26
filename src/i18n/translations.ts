export type Language = 'tr' | 'en';

export interface Translations {
  header: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    mission: string;
    approach: string;
    founder: string;
  };
  aboutPage: {
    title: string;
    description1: string;
    description2: string;
    founderTitle: string;
    founderBio1: string;
    founderBio2: string;
    founderBio3: string;
  };
  services: {
    title: string;
    description: string;
    criminalLaw: {
      title: string;
      description: string;
      details: string[];
    };
    familyLaw: {
      title: string;
      description: string;
      details: string[];
    };
    commercialLaw: {
      title: string;
      description: string;
      details: string[];
    };
    laborLaw: {
      title: string;
      description: string;
      details: string[];
    };
    executionLaw: {
      title: string;
      description: string;
      details: string[];
    };
    inheritanceLaw: {
      title: string;
      description: string;
      details: string[];
    };
    realEstateLaw: {
      title: string;
      description: string;
      details: string[];
    };
    consumerLaw: {
      title: string;
      description: string;
      details: string[];
    };
    insuranceLaw: {
      title: string;
      description: string;
      details: string[];
    };
    informationLaw: {
      title: string;
      description: string;
      details: string[];
    };
    healthLaw: {
      title: string;
      description: string;
      details: string[];
    };
    contractLaw: {
      title: string;
      description: string;
      details: string[];
    };
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
  };
  footer: {
    rights: string;
    address: string;
  };
}

export const translations: Record<Language, Translations> = {
  tr: {
    header: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      services: 'Hizmetlerimiz',
      contact: 'İletişim',
    },
    hero: {
      title: 'MERAY HUKUK VE DANIŞMANLIK',
      subtitle: 'Dava ve uyuşmazlık süreçlerinde güvenilir danışmanınız. Profesyonel hizmet anlayışı ile yanınızdayız.',
      cta: 'Hizmetlerimizi İnceleyin',
    },
    about: {
      title: 'Hakkımızda',
      description: 'Meray Hukuk ve Danışmanlık, dava ve uyuşmazlık süreçleri ile hukuki danışmanlık alanlarında gerçek ve tüzel kişi müvekkillerine hizmet sunmaktadır. Her bir uyuşmazlığın kendi içindeki dinamiklerini gözeterek sürece hassasiyetle yaklaşmakta; müvekkillerinin beklentisini ve risk iştahını dikkate alarak hareket etmektedir.',
      mission: 'Tüm hizmetlerinde mesleki etik kurallarına ve yasal standartlara uygunluğu esas almakta, müvekkillerinin duyduğu güveni korumayı temel ilke olarak benimsemektedir.',
      approach: 'Mesleki yaklaşımımız; sektörel birikimimiz ve küresel uygulamalara hâkimiyetimizin birleşimi ile multidisipliner anlayış üzerine kuruludur.',
      founder: 'Kurucu Avukat',
    },
    aboutPage: {
      title: 'Hakkımızda',
      description1: 'Meray Hukuk ve Danışmanlık olarak temel amacımız, müvekkillerimizin faaliyetlerinde olumlu ve kalıcı etki bırakmaktır. Uyuşmazlıkların doğası gereği müvekkiller üzerinde yarattığı baskının farkında olarak hukuki süreçlerde yaşanan belirsizliğin azaltılmasını ve sürecin daha öngörülebilir hâle getirilmesini hedeflemekteyiz.',
      description2: 'Bu doğrultuda müvekkillerimizi düzenli olarak bilgilendirerek mevcut soru işaretlerinin giderilmesini sağlamaktayız. Mesleki yaklaşımımız; sektörel birikimimiz ve küresel uygulamalara hâkimiyetimizin birleşimi ile multidisipliner anlayış üzerine kuruludur.',
      founderTitle: 'Kurucu Avukat',
      founderBio1: 'Av. İlayda MERAY, 2017 yılında Hacettepe Üniversitesi Hukuk Fakültesinde lisans eğitimine başlamıştır. Hukuk lisans eğitimine başladığı ilk günden itibaren, hukukun küreselleşen dünyada evrensel bir dil kazandığı bilinciyle hareket etmiş; bu yaklaşımını yurt dışında Baltic International Academy\'de aldığı eğitimlerle pekiştirmiştir.',
      founderBio2: 'Mezun olduktan sonra Ankara Barosu\'na kayıtlı bir avukat olarak görevine başlamıştır. 2023 yılında ise Meray Hukuk ve Danışmanlık Bürosunu kurmuştur. Gerçek ve tüzel kişi müvekkillerine dava ve uyuşmazlık süreçlerinin yürütülmesi, resmî işlemlerin takibi ve hukuki danışmanlık hizmetleri sunmaktadır.',
      founderBio3: 'Ayrıca, profesyonel dil yetkinliği sayesinde yabancı dil içeren dosyalar ve hukuki metinler bakımından çeviri ve terminolojiye ilişkin süreçleri de bizzat yürütmekte; Ankara Adliyesinde tercüman bilirkişisi olarak da görev almaktadır.',
    },
    services: {
      title: 'Hizmetlerimiz',
      description: 'Geniş uzmanlık alanlarımız ile her türlü hukuki ihtiyacınıza profesyonel çözümler sunuyoruz.',
      criminalLaw: {
        title: 'Ceza Hukuku',
        description: 'Ceza davalarında müdafii ve vekil olarak temsil, suç mağdurlarının hakları ve tazminat talepleri konusunda danışmanlık hizmetleri.',
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
      familyLaw: {
        title: 'Aile Hukuku',
        description: 'Boşanma, velayet, nafaka, mal paylaşımı ve aile içi uyuşmazlıkların çözümü konularında profesyonel hukuki destek.',
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
      commercialLaw: {
        title: 'Ticaret Hukuku',
        description: 'Şirket kuruluşu, birleşme, devir işlemleri, ticari sözleşmeler ve ticari uyuşmazlıkların çözümünde uzman hizmet.',
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
      laborLaw: {
        title: 'İş Hukuku',
        description: 'İşçi ve işveren hakları, iş sözleşmeleri, kıdem ve ihbar tazminatı, mobbing ve iş kazaları konularında danışmanlık.',
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
      executionLaw: {
        title: 'İcra ve İflas Hukuku',
        description: 'Alacak tahsilatı, icra takipleri, haciz işlemleri ve iflas davalarında etkili hukuki çözümler.',
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
      inheritanceLaw: {
        title: 'Miras Hukuku',
        description: 'Miras paylaşımı, veraset ilamı, vasiyetname düzenleme ve mirastan mal kaçırma davalarında temsil.',
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
      realEstateLaw: {
        title: 'Gayrimenkul Hukuku',
        description: 'Tapu işlemleri, kat mülkiyeti, kira sözleşmeleri, tahliye ve gayrimenkul alım-satım işlemlerinde danışmanlık.',
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
      consumerLaw: {
        title: 'Tüketici Hukuku',
        description: 'Ayıplı mal ve hizmet, tüketici hakları ihlalleri ve Tüketici Hakem Heyeti süreçlerinde profesyonel destek.',
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
      insuranceLaw: {
        title: 'Sigorta Hukuku',
        description: 'Sigorta poliçeleri, tazminat talepleri, sigorta şirketleri ile uyuşmazlıklar ve rücu davalarında uzman hizmet.',
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
      informationLaw: {
        title: 'Bilişim Hukuku',
        description: 'Kişisel verilerin korunması, siber suçlar, e-ticaret düzenlemeleri ve dijital haklar konusunda danışmanlık.',
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
      healthLaw: {
        title: 'Sağlık Hukuku',
        description: 'Tıbbi malpraktis, hasta hakları, sağlık kuruluşları mevzuatı ve sağlık hizmetleri uyuşmazlıklarında temsil.',
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
      contractLaw: {
        title: 'Sözleşmeler Hukuku',
        description: 'Her türlü sözleşmenin hazırlanması, incelenmesi, müzakeresi ve sözleşmeden kaynaklanan uyuşmazlıkların çözümü.',
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
      },
    },
    contact: {
      title: 'İletişim',
      address: 'Adres',
      phone: 'Telefon',
      email: 'E-posta',
      formTitle: 'Bize Ulaşın',
      namePlaceholder: 'Adınız Soyadınız',
      emailPlaceholder: 'E-posta Adresiniz',
      phonePlaceholder: 'Telefon Numaranız',
      subjectPlaceholder: 'Konu',
      messagePlaceholder: 'Mesajınız',
      sendButton: 'Gönder',
    },
    footer: {
      rights: '© 2024 Meray Hukuk ve Danışmanlık. Tüm hakları saklıdır.',
      address: 'Ankara, Türkiye',
    },
  },
  en: {
    header: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
    },
    hero: {
      title: 'MERAY LAW & CONSULTANCY',
      subtitle: 'Your trusted adviser in litigation and dispute resolution. We are here with a professional service approach.',
      cta: 'Explore Our Services',
    },
    about: {
      title: 'About Us',
      description: 'Meray Law & Consultancy provides services to individual and corporate clients in litigation, dispute resolution, and legal consultancy. Each case is approached with sensitivity, taking into account the unique dynamics of the dispute as well as the client\'s expectations and risk appetite.',
      mission: 'In all our services, we adhere to professional ethical standards and legal regulations, prioritizing the trust that our clients place in us.',
      approach: 'Our professional approach is built on a multidisciplinary understanding, combining our sectoral expertise with knowledge of global practices.',
      founder: 'Founder & Attorney',
    },
    aboutPage: {
      title: 'About Us',
      description1: 'As Meray Law & Consultancy, our primary goal is to make a positive and lasting impact on our clients\' activities. Aware of the pressure that disputes can place on clients, we aim to reduce the uncertainty inherent in legal processes and make these processes more predictable.',
      description2: 'In line with this, we keep our clients regularly informed to address any questions or concerns they may have. Our professional approach is built on a multidisciplinary understanding, combining our sectoral expertise with knowledge of global practices.',
      founderTitle: 'Founder & Attorney',
      founderBio1: 'Attorney İlayda MERAY began her law studies at Hacettepe University Faculty of Law in 2017. From the very start of her legal education, she has acted with the awareness that law has become a universal language in an increasingly globalized world; she further strengthened this approach through education at the Baltic International Academy abroad.',
      founderBio2: 'After graduation, she registered with the Ankara Bar and began practicing as an attorney. In 2023, she founded Meray Law & Consultancy, providing services to individual and corporate clients in litigation and dispute resolution, handling official procedures, and offering legal consultancy.',
      founderBio3: 'Additionally, thanks to her professional language proficiency, she personally handles translation and terminology processes for cases and legal documents involving foreign languages, and also serves as a sworn interpreter at the Ankara Courthouse.',
    },
    services: {
      title: 'Our Services',
      description: 'We offer professional solutions to all your legal needs with our wide range of expertise.',
      criminalLaw: {
        title: 'Criminal Law',
        description: 'Representation as defense counsel in criminal cases, and consultancy on crime victims\' rights and compensation claims.',
        details: [
          "Defense representation in investigation and prosecution stages",
          "Crime victims' rights and compensation claims",
          "Development of defense strategies in criminal cases",
          "Objection, appeal and correction applications",
          "Detention and release procedures",
          "Mediation and reconciliation processes",
          "Official crimes and proceedings against civil servants",
          "Review and objection to expert reports",
          "Security measures and enforcement law applications"
        ]
      },
      familyLaw: {
        title: 'Family Law',
        description: 'Professional legal support in divorce, custody, alimony, property division, and resolution of family disputes.',
        details: [
          "Consensual and contested divorce cases",
          "Custody, personal relationship and child delivery cases",
          "Alimony (contribution, poverty, interim) cases",
          "Matrimonial property regime and liquidation",
          "Prenuptial agreements",
          "Cases arising from broken engagements",
          "Paternity determination and denial cases",
          "Adoption processes",
          "Domestic violence and protective orders",
          "Guardianship and trusteeship procedures"
        ]
      },
      commercialLaw: {
        title: 'Commercial Law',
        description: 'Expert services in company formation, mergers, transfers, commercial contracts, and resolution of commercial disputes.',
        details: [
          "Company formation, merger, transfer and dissolution",
          "Joint-stock and limited company general assembly meetings",
          "Preparation and review of commercial contracts",
          "Partnership disputes and withdrawal-expulsion cases",
          "Competition law applications",
          "Franchise and distributorship agreements",
          "Commercial debt collection and concordat processes",
          "Company mergers, transfers and restructuring",
          "Trade registry procedures and commercial bookkeeping consultancy",
          "Trade secret violations and unfair competition cases"
        ]
      },
      laborLaw: {
        title: 'Labor Law',
        description: 'Consultancy on employee and employer rights, employment contracts, severance and notice compensation, mobbing, and workplace accidents.',
        details: [
          "Preparation and review of employment contracts",
          "Reinstatement cases and termination procedures",
          "Severance and notice compensation calculations and cases",
          "Overtime, annual leave and wage claims",
          "Mobbing (psychological harassment) cases",
          "Work accident and occupational disease cases",
          "Non-compete agreements",
          "Workplace discrimination and equal treatment violations",
          "Collective labor agreements and strike-lockout processes",
          "Employer representative consultancy and social security procedures"
        ]
      },
      executionLaw: {
        title: 'Execution and Bankruptcy Law',
        description: 'Effective legal solutions in debt collection, execution proceedings, seizure operations, and bankruptcy cases.',
        details: [
          "Execution proceedings with and without judgment",
          "Seizure, sale and distribution procedures",
          "Precautionary seizure and injunction orders",
          "Negative declaratory and third-party claims",
          "Bankruptcy and concordat processes",
          "Execution denial compensation cases",
          "Proceedings based on negotiable instruments (checks, promissory notes, bills)",
          "Debt relief cases",
          "Complaints arising from execution and bankruptcy law",
          "Foreclosure of pledge proceedings"
        ]
      },
      inheritanceLaw: {
        title: 'Inheritance Law',
        description: 'Representation in inheritance division, certificates of inheritance, will preparation, and inheritance fraud cases.',
        details: [
          "Certificate of inheritance and heir certificate procedures",
          "Inheritance division cases (reduction, cancellation)",
          "Preparation and cancellation of wills",
          "Reserved portion violations and reduction cases",
          "Inheritance concealment cases",
          "Testator's simulation cases",
          "Life care contracts",
          "Inheritance rejection and inventory procedures",
          "Heir annotation procedures",
          "Partition of inheritance cases"
        ]
      },
      realEstateLaw: {
        title: 'Real Estate Law',
        description: 'Consultancy in title deed transactions, condominium ownership, lease agreements, eviction, and real estate purchase-sale transactions.',
        details: [
          "Real estate purchase-sale transactions and contract preparation",
          "Title deed cancellation and registration cases",
          "Zoning law applications and expropriation procedures",
          "Preparation of lease agreements and disputes",
          "Eviction cases and tenant rights",
          "Condominium ownership and easement procedures",
          "Partition of co-ownership cases",
          "Easement establishment and removal cases",
          "Family residence annotation and prevention of occupation cases",
          "Land share construction contracts"
        ]
      },
      consumerLaw: {
        title: 'Consumer Law',
        description: 'Professional support in defective goods and services, consumer rights violations, and Consumer Arbitration Committee processes.',
        details: [
          "Disputes arising from defective goods and services",
          "Consumer Arbitration Committee applications",
          "Right of withdrawal and distance selling contracts",
          "Door-to-door sales and timeshare contracts",
          "Credit sales and installment disputes",
          "Warranty and after-sales services",
          "Unfair terms cases in favor of consumers",
          "Misleading and deceptive advertisements",
          "Pre-paid housing sales",
          "Product safety and recall procedures"
        ]
      },
      insuranceLaw: {
        title: 'Insurance Law',
        description: 'Expert services in insurance policies, compensation claims, disputes with insurance companies, and recourse cases.',
        details: [
          "Compulsory liability insurance (traffic) compensation cases",
          "Comprehensive insurance damage compensation claims",
          "Life insurance policies and payments",
          "Health insurance related disputes",
          "DASK (Compulsory Earthquake Insurance) procedures",
          "Recourse cases and inter-insurance company relations",
          "Termination and cancellation of insurance contracts",
          "Objection to insurance expert reports",
          "Employer liability insurance",
          "Fire, theft and other property insurance"
        ]
      },
      informationLaw: {
        title: 'Information Technology Law',
        description: 'Consultancy on data protection, cyber crimes, e-commerce regulations, and digital rights.',
        details: [
          "Personal Data Protection Law (KVKK) compliance consultancy",
          "Data breach notifications and sanctions",
          "E-commerce legislation and platform responsibilities",
          "Electronic signature and secure electronic signature applications",
          "Cyber crimes (fraud, hacking, DDoS) and cases",
          "Copyright violations and digital content protection",
          "Domain disputes and trademark registration",
          "Social media law and personality rights violations",
          "Cloud computing contracts",
          "Software license agreements and disputes"
        ]
      },
      healthLaw: {
        title: 'Health Law',
        description: 'Representation in medical malpractice, patient rights, health institution regulations, and healthcare disputes.',
        details: [
          "Medical malpractice (wrongful treatment) cases",
          "Patient rights violations and complaints",
          "Informed consent and disclosure obligations",
          "Rights and responsibilities of healthcare workers",
          "Private and public hospital disputes",
          "Cosmetic surgery complications",
          "Compensation from drug and medical device errors",
          "Health institution legislation consultancy",
          "License and permit procedures",
          "Ministry of Health inspections and criminal sanctions"
        ]
      },
      contractLaw: {
        title: 'Contract Law',
        description: 'Preparation, review, negotiation of all types of contracts, and resolution of contract-related disputes.',
        details: [
          "Preparation of commercial and private law contracts",
          "Legal review and revision of contracts",
          "Non-disclosure agreements (NDA) and non-compete clauses",
          "Consultancy and service contracts",
          "Dealership, distributorship and franchise agreements",
          "Construction and contracting agreements",
          "Transportation and logistics contracts",
          "Contract breach and compensation cases",
          "Penalty clauses and contract termination procedures",
          "International commercial contracts and arbitration"
        ]
      },
    },
    contact: {
      title: 'Contact',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      formTitle: 'Get in Touch',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      phonePlaceholder: 'Your Phone Number',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Your Message',
      sendButton: 'Send',
    },
    footer: {
      rights: '© 2024 Meray Law & Consultancy. All rights reserved.',
      address: 'Ankara, Turkey',
    },
  },
};
