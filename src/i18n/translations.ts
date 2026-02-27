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
    categories: {
      id: string;
      title: string;
      content: string[];
      imagePrefix: string;
    }[];
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
      categories: [
        {
          id: 'sozlesmeler-hukuku',
          title: 'SÖZLEŞMELER HUKUKU',
          imagePrefix: 'Sözleşmeler hukuku',
          content: [
            'Sözleşmelerin kurulması, ifası ve sona ermesi süreçleri ile sözleşmeye aykırılıktan doğan uyuşmazlıklarda hukuki danışmanlık ve uyuşmazlık çözümüne yönelik hizmet sunulmaktadır.',
            'Sözleşmelerde kullanılan her kelimenin hukuki sonuç doğurma ihtimali mevcuttur. Uygulamada, profesyonel destek alınmaksızın eksik veya mevzuata aykırı şekilde hazırlanan sözleşmelerin ileride uyuşmazlıklara yol açabildiği görülmektedir.',
            'Bu kapsamda Meray Hukuk ve Danışmanlık Bürosu, karşılaşılması muhtemel ihtilaflar bakımından önleyici nitelikte danışmanlık vermektedir. Ayrıca sözleşmelerin yalnızca metinle sınırlı olmadığı dikkate alınarak; mevzuat, fiili uygulama ve taraf iradesi çerçevesinde risk değerlendirilmesi yapılmaktadır.'
          ]
        },
        {
          id: 'kira-ve-gayrimenkul-hukuku',
          title: 'KİRA VE GAYRİMENKUL HUKUKU',
          imagePrefix: 'kira ve gayrimenkul',
          content: [
            'Günümüzde kiraya veren ile kiracı arasında yaşanan uyuşmazlıklar, uygulamada sıklıkla karşılaşılan hukuki problemler arasında yer almaktadır. Kira bedelinin emsal seviyenin altında kalması, tahliye talepleri ve sözleşmeden kaynaklanan yükümlülükler; taraflar arasında ihtilafların doğmasına neden olabilmektedir.',
            'Meray Hukuk ve Danışmanlık Bürosu, kiraya veren veya kiracı müvekkillerinin üstün menfaatini gözeterek; icra takibi, ihtar, arabuluculuk ve dava süreçlerini yürütmektedir.',
            'Gayrimenkul hukuku, mülkiyet hakkının anayasal güvence altında olduğu ancak teknik detayların ve usul kurallarının hak kaybına yol açabileceği kapsamlı bir alandır. Meray Hukuk ve Danışmanlık Bürosu, taşınmaz mülkiyetine ilişkin uyuşmazlıklarda müvekkillerimizin ekonomik değer taşıyan haklarını korumayı amaçlamaktadır. Tapu iptali ve tescil davalarından kentsel dönüşüm süreçlerine, kamulaştırma uyuşmazlıklarından inşaat sözleşmelerine kadar geniş bir yelpazede hukuki danışmanlık ve dava takibi hizmeti verilmektedir.'
          ]
        },
        {
          id: 'sirketler-ve-ticaret-hukuku',
          title: 'ŞİRKETLER VE TİCARET HUKUKU',
          imagePrefix: 'şirketler ve ticaret',
          content: [
            'Şirket vekilliği kapsamında; günlük ticari işlemlerden sözleşme süreçlerine, yönetim kararlarından çalışan ilişkilerine kadar şirketin ihtiyaç duyduğu tüm hukuki konular yakından takip edilmektedir.',
            'Ticari sözleşmelerin hazırlanması ve müzakeresi, şirket içi yazışmaların ve ihtarların düzenlenmesi, hukuki risk analizi, uyuşmazlıkların dava aşamasına gelmeden çözülmesi ile dava ve icra süreçlerinin takibi bu kapsamda yürütülmektedir.',
            'Meray Hukuk ve Danışmanlık Bürosu olarak amacımız; ticari hayatın dinamik yapısı içerisinde şirketlerin ve ticari işletmelerin karşılaşabileceği hukuki riskleri minimize etmek, kurumsal yönetim süreçlerini yasal mevzuata uygun hale getirmek, şirket yönetiminin hukuki detaylarla vakit kaybetmeden işine odaklanmasını sağlamaktır.'
          ]
        },
        {
          id: 'sigorta-hukuku',
          title: 'SİGORTA HUKUKU',
          imagePrefix: 'sigorta hukuku',
          content: [
            'Meray Hukuk ve Danışmanlık Bürosu, sigorta hukuku ve trafik kazalarından doğan maddi ve manevi tazminat davalarında müvekkillerinin haklarını sigorta şirketleri ve kusurlu taraflar karşısında en üst düzeyde korumaktadır.',
            'Trafik kazaları neticesinde ortaya çıkan araç hasarları, değer kayıpları, yaralanmalı ve ölümlü kazalardan kaynaklanan tazminat süreçleri başta olmak üzere kapsamlı hukuki destek sağlanmaktadır. Hizmetlerimiz; sigorta poliçeleri limitlerinin ve kapsamının doğru yorumlanmasından, dava ve tahkim süreçlerinin yürütülmesine kadar geniş bir yelpazeyi kapsamaktadır.'
          ]
        },
        {
          id: 'aile-hukuku',
          title: 'AİLE HUKUKU',
          imagePrefix: 'aile hukuku',
          content: [
            'Aile hukuku, yalnızca yasal prosedürlerin işletilmesi değil, aynı zamanda tarafların psikolojik ve ekonomik dengelerinin korunmasını gerektiren hassas bir alandır. Aile hukuku; boşanma, velayet ve mal paylaşımı gibi geri dönüşü olmayan sonuçlar doğuran süreçleri kapsadığından bu alandaki hukuki temsil yalnızca bilgi değil, strateji ve tecrübe de gerektirmektedir.',
            'Bu doğrultuda Meray Hukuk ve Danışmanlık Bürosu; boşanma, nafaka, velayet, mal rejimi, tazminat, babalık davaları ve soy bağının reddi başta olmak üzere aile hukukunun tüm alanlarında kapsamlı hukuki danışmanlık ve dava takip hizmeti sunmaktadır.'
          ]
        },
        {
          id: 'idare-hukuku',
          title: 'İDARE HUKUKU',
          imagePrefix: 'idare hukuku',
          content: [
            'İdare hukuku; idarenin kamu gücünü kullanarak tesis ettiği işlemlerin hukuka uygunluğunu denetleyen ve idarenin kusurlu eylemlerinden doğan zararları tazmin eden önemli bir hukuk dalıdır. İdare hukuku; birey ile kamu gücü arasındaki dengenin korunmasını gerektiren, teknik ve hak düşürücü sürelere sıkı sıkıya bağlı bir alan olup bu alandaki hak kayıpları çoğu zaman telafisi güç sonuçlar doğurmaktadır. Bu bağlamda Meray Hukuk ve Danışmanlık Bürosu, sürelere ve usule ilişkin riskleri en baştan bertaraf ederek müvekkillerinin idare karşısında "güçlü ve korunan" taraf olmasını hedeflemektedir.',
            'İdari işlemlerin iptali, tam yargı davaları, kamu alacakları, disiplin soruşturmaları, memur ve kamu görevlilerinin statülerinden kaynaklanan uyuşmazlıklar ile idari para cezalarına karşı açılan davalar başlıca hizmet alanlarıdır.'
          ]
        },
        {
          id: 'is-hukuku',
          title: 'İŞ HUKUKU',
          imagePrefix: 'iş hukuku',
          content: [
            'Özel sektörde iş ilişkileri genellikle sorunsuz başlasa da zamanla işveren ve işçiler arasında ihtilaflar ortaya çıkabilmektedir. Bu ihtilaflar; iş sözleşmelerinin yorumlanmasından ücret, fazla mesai ve tazminat konularına; işyeri disiplininden işten çıkarma süreçlerine kadar geniş bir yelpazeyi kapsayabilir.',
            'Meray Hukuk ve Danışmanlık Bürosu; iş sözleşmelerinin feshi kaynaklı alacak ve tazminat davaları, iş kazası ve meslek hastalığı kaynaklı tazminat talepleri ile işe iade davaları başta olmak üzere ilgili uyuşmazlıklarda müvekkillerinin üstün menfaatini gözetmektedir.'
          ]
        },
        {
          id: 'icra-ve-iflas-hukuku',
          title: 'İCRA VE İFLAS HUKUKU',
          imagePrefix: 'icra ve iflas',
          content: [
            'Ekonomik ilişkilerin dinamik yapısı içerisinde, alacakların tahsili veya haksız takiplere karşı korunma süreçleri; basit bir tahsil veya borca itiraz işleminin ötesinde yargılamanın en ince detaylarının lehinize kullanılmasını gerektirmektedir. İcra ve İflas Hukuku, hem mevzuat bilgisi hem de tecrübe gerektiren kritik bir süreçtir bu sebeple hatalı ya da geç kalınmış adımlar ciddi maddi kayıplara yol açabilir.',
            'Meray Hukuk ve Danışmanlık Bürosu, alacaklı ve borçlu tarafın durumunu somut olayın özelliklerine göre değerlendirerek en etkili tahsil veya korunma stratejisini belirlemektedir. Bu kapsamda; ilamlı ve ilamsız icra takipleri, kambiyo senetlerinden kaynaklanan alacakların tahsili, haciz ve satış işlemleri, borca itiraz ve ödeme planı müzakereleri, menfi tespit ve istirdat davaları, icra hukuk mahkemelerinde görülen şikâyet ve itiraz süreçleri ile iflas ve konkordato süreçleri başlıca hizmet alanlarıdır.'
          ]
        },
        {
          id: 'gumruk-hukuku',
          title: 'GÜMRÜK HUKUKU VE GÜMRÜKTE HAKSIZ EL KOYMADAN KAYNAKLI TAZMİNAT HUKUKU',
          imagePrefix: 'gümrük hukuku',
          content: [
            'Gümrük işlemleri, uluslararası ticaretin en kritik ve teknik detaylar içeren süreçlerinden biridir. Ticari hayatın olağan akışı içerisinde, ithalat veya ihracat süreçlerinde karşılaşılan idari engeller, haksız el koyma işlemleri ve gümrük idaresinin hatalı uygulamaları, firmalar için ciddi maddi kayıplara ve ticari itibar zedelenmesine yol açabilmektedir.',
            'El konulan mallar, gümrükte kaçakçılık şüphesiyle muhafaza altına alındıktan sonra çoğu zaman gerçek bedelinin oldukça altında bedellerle satılarak tasfiye edilmekte ya da uzun süren yargılama süreçleri nedeniyle değer kaybına uğrayarak gerçek ekonomik değerini yitirmektedir. Bu nedenle, müvekkillerin bu süreçler sonucunda uğradıkları zararların tazmini amacıyla gerekli hukuki süreçler yürütülmektedir.'
          ]
        },
        {
          id: 'kisisel-verileri-koruma-hukuku',
          title: 'KİŞİSEL VERİLERİ KORUMA HUKUKU',
          imagePrefix: 'kişisel veriler',
          content: [
            'Meray Hukuk ve Danışmanlık Bürosu; müvekkillerinin idari para cezaları ve itibar kaybı riskleriyle karşılaşmamaları adına 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), güncel Kurul kararları ve yargı içtihatları kapsamında kapsamlı ve profesyonel danışmanlık hizmeti sunmaktadır.',
            'Bu bağlamda; KVKK uyum projeleri ve dokümantasyon süreçleri yürütülmekte, çalışanlar için farkındalık eğitimleri ve önleyici hukuk hizmeti verilmekte, Kişisel Verileri Koruma Kurulu ve yargı mercileri nezdinde gereken temsil ve savunma faaliyetleri yerine getirilmektedir.'
          ]
        },
        {
          id: 'yabancilar-ve-vatandaslik-hukuku',
          title: 'YABANCILAR VE VATANDAŞLIK HUKUKU',
          imagePrefix: 'yabancılar',
          content: [
            'Yabancıların Türkiye’ye giriş, ikamet, çalışma ve vatandaşlık kazanımı gibi süreçlerde karşılaştıkları idari ve hukuki sorunlar; mevzuatın teknik yapısı nedeniyle uzmanlık gerektirmekte ve bu süreçlerin vize şirketleri yerine avukatlar tarafından yürütülmesi büyük önem arz etmektedir.',
            'Meray Hukuk ve Danışmanlık Bürosu; sınır dışı etme (deport) kararlarının iptali, idari gözetim kararlarına itiraz, giriş yasaklarının (tahdit kodlarının) kaldırılması, ikamet izni ve vatandaşlık başvurularının reddine karşı açılacak davalar gibi konularda hizmet vermektedir.'
          ]
        },
        {
          id: 'ceza-hukuku',
          title: 'CEZA HUKUKU',
          imagePrefix: 'ceza hukuku',
          content: [
            'Ceza davaları, kişilerin özgürlüğünü ve itibarını doğrudan etkileyen süreçler olduğundan doğru strateji ve deneyimle hareket etmek hayati öneme sahiptir. Meray Hukuk ve Danışmanlık Bürosu, soruşturma evresinden kovuşturma evresinin sonuna kadar her aşamada müvekkillerine sunduğu hukuki destek, adil yargılanma hakkının tesisi ve maddi gerçeğin ortaya çıkarılması temeline dayanmaktadır.'
          ]
        }
      ]
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
      categories: [
        {
          id: 'sozlesmeler-hukuku',
          title: 'CONTRACT LAW',
          imagePrefix: 'Sözleşmeler hukuku',
          content: [
            'Legal advisory and dispute resolution services are provided with respect to the formation, performance, and termination of contracts, as well as disputes arising from breach of contract.',
            'Every word used in a contract may give rise to legal consequences. In practice, it is frequently observed that contracts prepared incompletely or in violation of applicable legislation—without professional legal support—may lead to disputes in the future.',
            'Within this scope, Meray Law & Legal Advisory provides preventive legal consultancy aimed at minimizing potential disputes before they arise. Moreover, recognizing that contracts are not limited solely to their written text, risk assessments are conducted within the framework of applicable legislation, actual practice, and the true intention of the parties.'
          ]
        },
        {
          id: 'kira-ve-gayrimenkul-hukuku',
          title: 'REAL ESTATE & TENANCY LAW',
          imagePrefix: 'kira ve gayrimenkul',
          content: [
            'In today’s practice, disputes between landlords and tenants constitute one of the most frequently encountered legal issues. Rental amounts remaining below market value, eviction claims, and obligations arising from lease agreements may give rise to conflicts between the parties.',
            'Meray Law & Legal Advisory represents both landlord and tenant clients by safeguarding their best interests and conducts enforcement proceedings, notices, mediation processes and litigation related to lease disputes.',
            'Real estate law is a comprehensive field in which the right to property is constitutionally protected; however, technical details and procedural rules may lead to loss of rights if not properly observed. Meray Law & Legal Advisory aims to protect the economically valuable rights of its clients in disputes concerning immovable property.',
            'Within this scope, legal consultancy and litigation services are provided across a broad range of matters, including cancellation and registration of title deeds, urban transformation processes, expropriation disputes, and construction contracts.'
          ]
        },
        {
          id: 'sirketler-ve-ticaret-hukuku',
          title: 'CORPORATE & COMMERCIAL LAW',
          imagePrefix: 'şirketler ve ticaret',
          content: [
            'Within the scope of corporate representation, all legal matters required by companies are closely monitored, ranging from daily commercial transactions and contractual processes to management decisions and employee relations.',
            'This includes the drafting and negotiation of commercial contracts, preparation of internal corporate correspondence and legal notices, legal risk analysis, resolution of disputes before they escalate into litigation, as well as the management of litigation and enforcement proceedings.',
            'As Meray Law & Legal Advisory, our objective is to minimize legal risks that companies and commercial enterprises may encounter within the dynamic structure of commercial life, to align corporate governance processes with applicable legislation, and to enable company management to focus on their core business without being burdened by legal complexities.'
          ]
        },
        {
          id: 'sigorta-hukuku',
          title: 'INSURANCE LAW',
          imagePrefix: 'sigorta hukuku',
          content: [
            'Meray Law & Legal Advisory protects the rights of its clients at the highest level in material and moral compensation claims arising from insurance law and traffic accidents, particularly against insurance companies and liable parties.',
            'Comprehensive legal support is provided in relation to compensation processes arising from traffic accidents, including vehicle damage, loss of value, personal injury, and fatal accidents.',
            'Our services cover a broad spectrum, ranging from the accurate interpretation of insurance policy limits and coverage to the management of litigation and arbitration proceedings.'
          ]
        },
        {
          id: 'aile-hukuku',
          title: 'FAMILY LAW',
          imagePrefix: 'aile hukuku',
          content: [
            'Family law is a sensitive field that requires not only the proper conduct of legal procedures but also the protection of the psychological and economic balance of the parties involved. As family law encompasses processes such as divorce, custody, and division of property—each of which may lead to irreversible consequences—legal representation in this area requires not only legal knowledge but also strategic insight and experience.',
            'In this regard, Meray Law & Legal Advisory provides comprehensive legal consultancy and litigation services across all areas of family law, including divorce, alimony, custody, matrimonial property regimes, compensation claims, paternity actions, and actions for the denial of parentage.'
          ]
        },
        {
          id: 'idare-hukuku',
          title: 'ADMINISTRATIVE LAW',
          imagePrefix: 'idare hukuku',
          content: [
            'Administrative law is a fundamental branch of law that examines the legality of actions taken by public authorities through the exercise of public power and provides compensation for damages arising from the faulty acts of the administration. It is a highly technical field that requires the protection of the balance between the individual and public authority and is strictly bound by procedural rules and statutory limitation periods, where loss of rights often leads to consequences that are difficult to remedy.',
            'In this context, Meray Law & Legal Advisory aims to ensure that its clients stand as the “strong and protected” party against public authorities by eliminating procedural and time-related risks from the outset.',
            'Our primary areas of practice include actions for annulment of administrative acts, full remedy actions, public receivables, disciplinary investigations, disputes arising from the legal status of civil servants and public officials, as well as lawsuits filed against administrative fines.'
          ]
        },
        {
          id: 'is-hukuku',
          title: 'LABOR LAW',
          imagePrefix: 'iş hukuku',
          content: [
            'Although employment relationships in the private sector often begin smoothly, disputes may arise over time between employers and employees. Such disputes may cover a wide range of issues, from the interpretation of employment contracts to matters relating to wages, overtime, and compensation, as well as workplace discipline and termination processes.',
            'Meray Law & Legal Advisory safeguards the best interests of its clients in employment-related disputes, particularly in claims and compensation actions arising from the termination of employment contracts, compensation claims resulting from occupational accidents and occupational diseases, and reinstatement lawsuits.'
          ]
        },
        {
          id: 'icra-ve-iflas-hukuku',
          title: 'ENFORCEMENT & INSOLVENCY LAW',
          imagePrefix: 'icra ve iflas',
          content: [
            'Within the dynamic structure of economic relations, the collection of receivables or protection against unjust enforcement proceedings requires more than a simple collection effort or objection to debt; it necessitates the strategic use of even the most detailed aspects of judicial procedures in your favor. Enforcement and insolvency law is a critical field that demands both thorough knowledge of legislation and practical experience, as incorrect or delayed actions may result in significant financial losses.',
            'Meray Law & Legal Advisory determines the most effective collection or protection strategy by assessing the positions of both creditor and debtor in light of the specific circumstances of each case.',
            'Within this scope, our primary areas of practice include enforcement proceedings with or without judgment, collection of receivables arising from negotiable instruments, attachment and sale procedures, objections to debt and negotiations of payment plans, negative declaratory actions and restitution claims, complaint and objection proceedings before enforcement courts, as well as bankruptcy and concordat processes.'
          ]
        },
        {
          id: 'gumruk-hukuku',
          title: 'CUSTOMS LAW & COMPENSATION FOR UNLAWFUL SEIZURE',
          imagePrefix: 'gümrük hukuku',
          content: [
            'Customs law is a specialized field governing the legal framework of cross-border trade, customs procedures, and administrative practices carried out by customs authorities. In practice, unlawful or unjustified seizures conducted by customs authorities may result in significant financial losses for individuals and companies.',
            'Meray Law & Legal Advisory provides comprehensive legal representation and consultancy in compensation claims arising from unlawful seizures by customs authorities, as well as in disputes related to customs transactions and penalties.',
            'Within this scope, our services include challenges against customs decisions, compensation claims for material losses, disputes arising from confiscation and seizure procedures, and the management of litigation and administrative processes before relevant authorities.'
          ]
        },
        {
          id: 'kisisel-verileri-koruma-hukuku',
          title: 'PERSONEL DATA PROTECTION LAW',
          imagePrefix: 'kişisel veriler',
          content: [
            'Meray Law & Legal Advisory provides comprehensive and professional legal consultancy in order to protect its clients from the risks of administrative fines and reputational damage, within the scope of the Turkish Personal Data Protection Law No. 6698 (KVKK), current decisions of the Data Protection Authority, and relevant judicial precedents.',
            'In this context, data protection compliance projects and documentation processes are carried out, awareness and preventive law training is provided for employees, and the necessary representation and defense services are rendered before the Personal Data Protection Authority and judicial bodies.'
          ]
        },
        {
          id: 'yabancilar-ve-vatandaslik-hukuku',
          title: 'IMMIGRATION AND CITIZENSHIP LAW',
          imagePrefix: 'yabancılar',
          content: [
            'Administrative and legal issues encountered by foreigners in processes such as entry into Türkiye, residence, work permits, and acquisition of citizenship require specialized legal expertise due to the technical nature of the legislation. In this regard, it is of great importance that such processes are conducted by qualified attorneys rather than visa agencies.',
            'Meray Law & Legal Advisory provides legal services in matters including the annulment of deportation decisions, objections to administrative detention orders, removal of entry bans (restriction codes), and lawsuits to be filed against the rejection of residence permit and citizenship applications.'
          ]
        },
        {
          id: 'ceza-hukuku',
          title: 'CRIMINAL LAW',
          imagePrefix: 'ceza hukuku',
          content: [
            'Criminal proceedings directly affect an individual’s liberty and reputation; therefore, acting with the right strategy and experience is of vital importance. Meray Law & Legal Advisory provides legal support to its clients at every stage of criminal proceedings, from the investigation phase through to the conclusion of the prosecution, based on the fundamental principles of ensuring the right to a fair trial and establishing the material truth.'
          ]
        }
      ]
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
