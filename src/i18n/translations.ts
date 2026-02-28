export type Language = 'tr' | 'en';

export interface Translations {
  header: {
    home: string;
    about: string;
    services: string;
    contact: string;
    blog: string;
  };
  blog: {
    backToBlog: string;
    readMore: string;
  };
  blogs: {
    id: string;
    title: string;
    content: string[];
    imagePrefix: string;
  }[];
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
      blog: 'Blog',
    },
    blog: {
      backToBlog: 'Blog\'a Dön',
      readMore: 'Devamını Oku',
    },
    blogs: [
      {
        id: 'gumrukte-el-konulan-mallar',
        title: 'Gümrükte Haksız Yere El Konulan Mallar Nedeniyle Uğranılan Maddi - Manevi Zarar: Gümrük ve Ceza Hukuku Bağlamında Ekonomik Kayıpların Telafisi',
        imagePrefix: 'blog 1',
        content: [
          'Bu yazımızda, gümrükte bir suç şüphesi kapsamında el konulan malların, yargılama süreci sonunda beraat kararı verilmesine rağmen uğranılan zararların tazmini konusunu ele alıyoruz. Uygulamada, uzun süren ceza yargılamaları sonucunda malların bozulması, ekonomik veya teknolojik değerini yitirmesi yahut Gümrük Tasfiye Müdürlüğü tarafından düşük bedellerle satılarak tasfiye edilmesi sıkça karşılaşılan bir durumdur. Bu çerçevede, Anayasa Mahkemesi ve Yargıtay kararları doğrultusunda, devletin tazmin sorumluluğuna ilişkin değerlendirmelerde bulunulacaktır.',
          '1. HANGİ DURUMLARDA TAZMİNAT HAKKI DOĞAR?',
          'Beraat kararı, el konulan malların eksiksiz ve sağlam bir şekilde iadesi yükümlülüğünü doğurmaktadır. Aynı şekilde, uzun süren ceza yargılamaları neticesinde haksız olarak verilen el koyma tedbiri nedeniyle, kişilerin maddi ve manevi kayıpları ortaya çıkabilmektedir. İdarenin sebep olduğu zararlar bakımından tazminat hakkının doğduğu şüphesizdir. Aşağıda en temel zarar sebepleri yer almaktadır:',
          '• Malların Değer Kaybetmesi: El konulan mallar; tekstil ürünü, teknolojik cihaz veya sezonluk bir ürün olabilir. Uzun süren el koyma süreci boyunca bu malların modası geçmiş, teknolojisi eskimiş veya piyasa değeri düşmüş olabilir. Anayasa Mahkemesi ve Yargıtay kararlarında da belirtildiği üzere, malların "moda dışı kalması" veya "ekonomik olarak yıpranması" nedeniyle oluşan değer kaybı, devlet tarafından tazmin edilmesi gereken bir zarardır.',
          '• Malların Bozulması veya Hasar Görmesi: Gümrük idaresi, el koyduğu malları bir emanetçi gibi özenle korumakla yükümlüdür. Eğer ürünler uygun koşullarda saklanmadığı için bozulmuş, çürümüş, paslanmış veya herhangi bir şekilde fiziki hasara uğramışsa, idarenin "hizmet kusuru" işlemiş olduğu kabul edilir. Bu durumda, malların sağlam haldeki değeri üzerinden tazminat talebi mümkündür. Hatta idare, malların ekonomik değerini kaybettiği gerekçesiyle onları imha etmişse dahi, bu durum tazminat sorumluluğunu ortadan kaldırmaz.',
          '• Malların Gümrük İdaresi Tarafından Satılması (Tasfiye): En sık karşılaşılan durumlardan biri de, yargılama süreci devam ederken gümrük idaresinin malları tasfiye ederek satmasıdır. Beraat kararı sonrası idare size sadece satıştan elde edilen bedeli iade edecektir. Ancak yerleşik mahkeme kararlarına göre bu yeterli değildir. Devletin, el konulan malı sattığı düşük bedel üzerinden iade etmesi, gerçek zararı karşılamamaktadır. Bu fark, kişinin uğradığı asıl zarardır ve tazminat davasının temelini oluşturur.',
          '2. TAZMİNAT DAVASINDA TALEP EDİLEBİLECEKLER',
          'Maddi- manevi tazminat davasında, uğranılan tüm somut ve ispatlanabilir zararlar dava konusu olmaktadır. Başlıca talep edilebilecek kalemler aşağıdaki gibi olup somut olayın durumuna göre talepler değişebilmektedir:',
          '• Malın Rayiç Bedeli: Ürünler iade edilemeyecek durumdaysa (satılmış, imha edilmiş, bozulmuş vb.), el konulma tarihindeki piyasa değerinin tamamını talep edilebilir.',
          '• Değer Kaybı Farkı: Ürünler iade edilmiş ancak ürünlerin değeri düşmüşse, el konulma tarihindeki değeri ile iade tarihindeki değeri arasındaki fark talep edilebilir.',
          '• Doğrudan Yapılan Masraflar: El koyma süreciyle ilgili olarak ödenmek zorunda kalınan ardiye (depo) ücreti gibi somut masraflar da maddi tazminat kapsamında talep edilebilmektedir.',
          '• Yasal Faiz: Uğranılan zararın, haksız el konulma tarihinden itibaren işleyecek yasal faiziyle birlikte ödenmesini isteme hakkı bulunmaktadır. Bu, paranın değer kaybına kişiyi korumayı amaçlamaktadır',
          '3. TAZMİNAT DAVASI KAPSAMINDA DİKKAT EDİLMESİ GEREKEN EN ÖNEMLİ HUSUS NEDİR?',
          'Ürünlere haksız yere el konulması neticesinde devam eden ceza yargılaması sonuçlanır sonuçlanmaz, hak düşürücü sürenin geçmemesi için derhal dava yoluna başvurulması gerekmektedir. Anayasa ile güvence altına alınan mülkiyet hakkının ihlali nedeniyle uğranılan tüm ekonomik zararların devletten talep etme hakkı bulunmaktadır. Bu süreç hukuki ve teknik detaylar içerdiğinden, hak kaybı yaşamamak adına alanında uzman bir avukattan profesyonel hukuki destek alınması büyük önem taşımaktadır.',
          'Bu yazı yalnızca genel bilgilendirme amacı taşır. Her olayın kendine özgü koşulları bulunduğundan, somut bir durumda profesyonel hukuki danışmanlık alınması önerilir.'
        ]
      },
      {
        id: 'birden-fazla-evi-olan-ev-sahibi',
        title: 'Birden Fazla Evi Olan Ev Sahibi, Kiracısını Çıkarırken İstediği Evi Seçebilir mi?',
        imagePrefix: 'Blog yazısı 2',
        content: [
          'Günümüzün en sık karşılaşılan hukuki sorunlarından biri, ev sahibi ile kiracı arasındaki tahliye davalarıdır. Özellikle ev sahibinin veya ailesinin bir konuta ihtiyaç duyması, 6098 sayılı Türk Borçlar Kanunu’nda düzenlenen geçerli bir tahliye sebebidir. Peki, birden fazla dairesi veya dükkânı olan bir mal sahibi, ihtiyaç anında bu taşınmazlardan hangisini seçeceğine kendisi karar verebilir mi? Yoksa kanun, onu belirli bir taşınmaza mı yönlendirir?',
          'Bu yazımızda, Yargıtay kararları ışığında, ev sahibinin “ihtiyaç sebebiyle tahliye” davalarında sahip olduğu taşınmaz seçme özgürlüğünü ve bu özgürlüğün sınırlarını, herkesin anlayabileceği bir dille ele alacağız.',
          'Temel Kural: Mülkiyet Hakkı ve Seçim Özgürlüğü',
          'Hukuk sistemimizdeki temel prensiplerden biri mülkiyet hakkıdır. Bu hak, mal sahibine mülkünü dilediği gibi kullanma, ondan yararlanma ve üzerinde tasarrufta bulunma yetkisi verir. Yargıtay, bu temel ilkeye dayanarak birden fazla taşınmazı olan bir kiraya verenin ihtiyaç duyduğu takdirde bu taşınmazlardan hangisinin tahliyesini isteyeceğini seçme hakkına sahip olduğunu istikrarlı bir şekilde kabul etmektedir.',
          'Altın Kural: İhtiyacın “Gerçek, Samimi ve Zorunlu” Olması',
          'Ev sahibinin seçim özgürlüğü sınırsız değildir. Bu hakkın kullanılabilmesi için en temel ve vazgeçilmez şart, ileri sürülen ihtiyacın gerçek, samimi ve zorunlu olmasıdır. Mahkemeler, bu üç kriteri titizlikle inceler.',
          '• Gerçek İhtiyaç: İhtiyaç, hayali veya varsayımsal olmamalıdır. Örneğin yurt dışından kesin dönüş yapacak olmak, evlenecek olmak, sağlık sorunları nedeniyle hastaneye yakın bir konuma taşınma gerekliliği gibi somut durumlara dayanmalıdır. Henüz doğmamış veya ne zaman gerçekleşeceği belirsiz olan bir ihtiyaç, tahliye için yeterli görülmez.',
          '• Samimi İhtiyaç: Yargıtay, kararlarında istikrarlı olarak ev sahibinin tercihinin keyfi olmaması ve dürüstlük kuralına uygun olmasını beklemektedir',
          '• Zorunlu İhtiyaç: İhtiyacın geçici bir heves değil, bir gereklilik olması aranır. Örneğin, yaz tatilini geçirmek için bir daireye ihtiyaç duymak, genellikle zorunlu bir ihtiyaç olarak kabul edilmez. Ancak, ev sahibinin kendisi de kirada oturuyorsa ve ev sahibi tarafından tahliye edilme riski altındaysa, kendi mülküne geçme ihtiyacı zorunlu kabul edilir.',
          'Yargıtay Kararlarından Pratik Örnekler',
          'Yargıtay kararları, bu teorik bilgileri somut olaylarla daha anlaşılır kılar:',
          '• Hastaneye Yakınlık Tercihi: Bir kararında Yargıtay, sağlık sorunları yaşayan ev sahibinin, hastaneye daha yakın olan dairesini seçmesini haklı bir tercih olarak görmüş ve ihtiyacın samimi olduğuna hükmetmiştir.',
          '• Kirada Oturan Ev Sahibinin Durumu: Kendisi kirada oturan bir ev sahibinin, mülkü olan bir eve geçmek istemesi en doğal hakkıdır. Hatta Yargıtay, bu durumda “mülkiyet hakkına üstünlük tanınması gerektiğini” belirtir. Ev sahibinin annesinin evinde bedelsiz oturuyor olması bile, kendi evine geçme isteğini samimiyetsiz kılmaz.',
          '• İşyeri İhtiyacında Eşdeğerlik ve Üstünlük: İşyeri ihtiyacına dayalı davalarda mahkeme, tahliyesi istenen dükkânın, ev sahibinin mevcut işyerine göre daha üstün veya en azından eşdeğer özelliklere sahip olup olmadığını araştırabilir. Eğer iki dükkân benzer nitelikteyse, yine mülkiyet hakkı ağır basar ve ev sahibinin tercihi geçerli sayılır.',
          'Sonuç: Tercih Hakkı Var Ama Kanıt Şart!',
          'Toparlayacak olursak, birden fazla mülkü olan bir ev sahibi, ihtiyaç durumunda hangi taşınmazın tahliye edileceğini seçme özgürlüğüne sahiptir. Bu, mülkiyet hakkının bir gereğidir.',
          'Ancak bu özgürlük, bir "açık çek" değildir. Ev sahibi, mahkemede bu tercihinin arkasında yatan ihtiyacın gerçek, samimi ve zorunlu olduğunu somut delillerle ispatlamakla yükümlüdür. Mahkeme, ev sahibinin tercihinin keyfi, kötü niyetli veya sadece kiracıdan kurtulma amacı taşıdığına kanaat getirirse davayı reddedecektir.',
          'Dolayısıyla, ev sahibi ve kiracı arasındaki bu hassas denge; bir yanda mülkiyet hakkının korunması, diğer yanda ise barınma hakkının güvence altına alınması ilkeleri çerçevesinde, her davanın kendi özel koşullarına göre değerlendirilmektedir.'
        ]
      }
    ],
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
      blog: 'Blog',
    },
    blog: {
      backToBlog: 'Back to Blog',
      readMore: 'Read More',
    },
    blogs: [
      {
        id: 'gumrukte-el-konulan-mallar',
        title: 'Compensation for Material and Moral Damages Arising From Unlawful Seizure of Goods at Customs: Recovering Economic Losses in the Context of Customs and Criminal Law',
        imagePrefix: 'blog 1',
        content: [
          'In this article, we address the issue of compensation for damages suffered due to the seizure of goods at customs under suspicion of a crime, even when the owner is later acquitted. In practice, it is common for goods to deteriorate, lose their economic or technological value, or be sold by the Customs Liquidation Directorate at low prices after lengthy criminal proceedings. Within this framework, we will evaluate the State’s liability for compensation in light of Constitutional Court and Court of Cassation rulings.',
          '1. WHEN DOES THE RIGHT TO COMPENSATION ARISE?',
          'An acquittal decision obliges the authorities to return the seized goods intact and in full. Likewise, when goods are unlawfully seized during lengthy criminal proceedings, individuals may suffer both material and moral losses. It is undisputed that compensation becomes due for damages caused by the administration. The main causes of loss include:',
          '• Depreciation of Goods: Seized goods may be textile products, technological devices, or seasonal items. During the long seizure process, these goods may become outdated, obsolete, or lose market value. As stated in Constitutional Court and Court of Cassation decisions, depreciation resulting from goods becoming “out of fashion” or “economically obsolete” constitutes compensable damage for which the State is liable.',
          '• Deterioration or Damage to Goods: The customs administration is obliged to preserve the seized goods with due diligence, like a custodian. If goods are spoiled, rusted, decayed, or physically damaged due to improper storage conditions, the administration is deemed to have committed a “service fault.” In such cases, compensation may be claimed based on the goods’ intact value. Even if the administration destroys the goods on the grounds that they have lost economic value, this does not eliminate its liability for compensation.',
          '• Sale (Liquidation) of Goods by the Customs Administration: One of the most frequent cases occurs when the customs authority sells (liquidates) the goods while the criminal case is still ongoing. After an acquittal, the administration typically returns only the proceeds from the sale. However, according to established case law, this is insufficient. Returning only the low sale price does not cover the real loss. The difference between the sale amount and the goods’ actual value constitutes the compensable damage and forms the basis of the compensation claim.',
          '2. WHAT CAN BE CLAIMED IN A COMPENSATION LAWSUIT?',
          'In a material and moral damages lawsuit, all concrete and provable losses may be claimed. The main items that may be requested include:',
          '• Market Value of the Goods: If the goods cannot be returned (sold, destroyed, or spoiled), the full market value at the time of seizure may be claimed.',
          '• Depreciation Difference: If the goods are returned but have lost value, the difference between their value at the time of seizure and at the time of return may be claimed.',
          '• Direct Expenses: Concrete costs related to the seizure process—such as warehouse (storage) fees—may also be claimed as part of material damages.',
          '• Statutory Interest: The claimant may request that compensation be paid with legal interest accruing from the date of the unlawful seizure, protecting against monetary depreciation.',
          '3. THE MOST IMPORTANT POINT TO CONSIDER IN COMPENSATION CLAIMS',
          'As soon as the criminal proceedings concerning the unlawfully seized goods conclude, a compensation lawsuit must be filed without delay to avoid missing the statutory limitation period. Individuals have the right to claim from the State all economic losses arising from the violation of their constitutionally protected property rights.',
          'Since this process involves complex legal and technical issues, obtaining professional legal assistance from an attorney experienced in this field is crucial to prevent potential loss of rights.',
          'This article is for general informational purposes only. Each case has unique circumstances; therefore, professional legal advice should be sought for specific situations.'
        ]
      },
      {
        id: 'birden-fazla-evi-olan-ev-sahibi',
        title: 'Can a Landlord with Multiple Houses Choose Which House to Evict the Tenant From?',
        imagePrefix: 'Blog yazısı 2',
        content: [
          'One of the most common legal problems today is eviction cases between landlords and tenants. In particular, the need for a residence by the landlord or their family is a valid reason for eviction regulated in the Turkish Code of Obligations No. 6098. Well, can a landlord with multiple apartments or shops decide which of these properties to choose in case of need? Or does the law direct them to a specific property?',
          'In this article, in light of the Supreme Court decisions, we will discuss the landlord\'s freedom to choose a property in "eviction due to need" cases and the limits of this freedom in a language that everyone can understand.',
          'Basic Rule: Property Right and Freedom of Choice',
          'One of the basic principles in our legal system is the right to property. This right gives the owner the authority to use, benefit from, and dispose of their property as they wish. Based on this basic principle, the Supreme Court consistently accepts that a landlord with multiple properties has the right to choose which of these properties to request the eviction of, if needed.',
          'Golden Rule: The Need Must Be "Real, Sincere, and Mandatory"',
          'The landlord\'s freedom of choice is not unlimited. The most basic and indispensable condition for the exercise of this right is that the asserted need is real, sincere, and mandatory. The courts strictly examine these three criteria.',
          '• Real Need: The need must not be imaginary or hypothetical. For example, it should be based on concrete situations such as a definite return from abroad, getting married, or the necessity to move to a location close to a hospital due to health problems. A need that has not yet arisen or is uncertain when it will occur is not considered sufficient for eviction.',
          '• Sincere Need: In its decisions, the Supreme Court consistently expects the landlord\'s choice not to be arbitrary and to comply with the rule of good faith.',
          '• Mandatory Need: It is required that the need is a necessity, not a passing fad. For example, needing an apartment to spend the summer holiday is generally not considered a mandatory need. However, if the landlord himself is also renting and is at risk of being evicted by the landlord, the need to move to his own property is considered mandatory.',
          'Practical Examples from Supreme Court Decisions',
          'Supreme Court decisions make this theoretical information more understandable with concrete cases:',
          '• Preference for Proximity to Hospital: In one decision, the Supreme Court considered the choice of a landlord with health problems to choose their apartment closer to the hospital as a justified preference and ruled that the need was sincere.',
          '• Situation of a Renting Landlord: It is the most natural right of a landlord who lives on rent to want to move to a house they own. In fact, the Supreme Court states that in this case "superiority should be given to the right of property". Even if the landlord is living rent-free in their mother\'s house, it does not make their desire to move to their own house insincere.',
          '• Equivalence and Superiority in Workplace Need: In cases based on workplace need, the court may investigate whether the shop whose eviction is requested has superior or at least equivalent equivalent features compared to the landlord\'s current workplace. If the two shops are of similar nature, the property right prevails again and the landlord\'s preference is considered valid.',
          'Conclusion: There is a Right to Choose but Proof is Essential!',
          'To summarize, a landlord with multiple properties has the freedom to choose which property will be evicted in case of need. This is a requirement of the right of property.',
          'However, this freedom is not a "blank check". The landlord is obliged to prove with concrete evidence in court that the need behind this preference is real, sincere, and mandatory. If the court concludes that the landlord\'s preference is arbitrary, malicious, or merely aimed at getting rid of the tenant, it will dismiss the case.',
          'Therefore, this delicate balance between the landlord and the tenant; is evaluated according to the specific conditions of each case within the framework of the principles of protecting the right to property on the one hand and securing the right to housing on the other.'
        ]
      }
    ],
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
