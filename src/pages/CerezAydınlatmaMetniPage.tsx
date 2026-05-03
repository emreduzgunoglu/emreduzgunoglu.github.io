import { useLanguage } from "../contexts/LanguageContext";

export function CerezAydınlatmaMetniPage() {
  const { language } = useLanguage();

  const trContent = (
    <>
      <section className="py-8">
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun ("Kanun") 10'uncu maddesi,
          Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında
          Tebliğ ("Tebliğ") ve Çerez Uygulamaları Hakkında Rehber ("Rehber") kapsamında veri
          sorumlusu sıfatıyla Meray Hukuk ve Danışmanlık Bürosuna ait www.merayhukuk.av.tr internet sitesini ("site")
          ziyaretiniz sırasında internet sitesi üzerinden işlenecek çerezler hakkında Kanun, Tebliğ,
          Rehber ile birlikte mevzuata uygun bir biçimde ilgili kişi sıfatıyla sizleri
          bilgilendirmek amacı ile hazırlanmıştır.
        </p>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          Kişisel verilerinizin işlenmesine ilişkin olarak detaylı bilgiye Kişisel Verilerin Korunması
          sayfasından erişebileceğinizi bilgilerinize sunarız.
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          1. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Sitemizde kullanılan çerezler, yalnızca etkileşimde olduğumuz üçüncü taraflardan gelmektedir.
          İnternet sitemizde yalnızca sizlere sunulan elektronik haberleşme ve bilgi toplumu
          hizmetlerinin sağlanabilmesi amacıyla üçüncü taraf eklentiler (Google Maps ve WhatsApp)
          üzerinden çerezler yer almaktadır. Sitemizde kullanılan çerezlerin hukuki sebepleri aşağıda
          spesifik olarak sınıflandırılmıştır:
        </p>
        <ul className="mb-4 space-y-3" style={{ color: "var(--law-text)" }}>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
            <span>
              <strong>Google Maps Çerezleri (Kriter A):</strong> Sitemizde yer alan harita entegrasyonu,
              Kişisel Verileri Koruma Kurumu tarafından yayımlanan Çerez Uygulamaları Hakkında Rehber
              (KVKK - 2023/1645 - 28.09.2023) kapsamında "Kriter A: Çerezin sadece, iletişimin
              elektronik haberleşme şebekesi üzerinden sağlanması amacıyla kullanılması" şartını
              sağlamaktadır.
            </span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
            <span>
              <strong>WhatsApp Çerezleri (Kriter A):</strong> Sitemiz üzerinden bizimle doğrudan iletişime
              geçmenizi sağlayan WhatsApp entegrasyonu, yine aynı Rehber (KVKK - 2023/1645 - 28.09.2023)
              kapsamında "Kriter A: Çerezin sadece, iletişimin elektronik haberleşme şebekesi üzerinden
              sağlanması amacıyla kullanılması" şartını sağlamaktadır.
            </span>
          </li>
        </ul>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          Sitemizde 3.parti olan Google ve WhatsApp'ın çerezleri dışında başka çerez kullanılmamaktadır.
          Bu veriler, Kanun'un 5. maddesinin 2. fıkrasının (c) bendi (bir sözleşmenin kurulması veya
          ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel
          verilerin işlenmesinin gerekli olması) ile (f) bendi (ilgili kişinin temel hak ve
          özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri
          işlenmesinin zorunlu olması) hukuki sebeplerine dayanılarak otomatik yollarla işlenmektedir.
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          2. Kişisel Verilerin Hangi Amaçla İşleneceği
        </h2>
        <ul className="mb-8 space-y-3" style={{ color: "var(--law-text)" }}>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
            <span>
              <strong>Google Maps Çerezleri:</strong> Yalnızca internet sitemiz üzerinden konum
              bilgilerimizin size elektronik haberleşme şebekesi üzerinden eksiksiz ve teknik olarak
              doğru bir şekilde iletilmesi amacıyla işlenmektedir.
            </span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
            <span>
              <strong>WhatsApp Çerezleri:</strong> Yalnızca sitemizi ziyaretiniz sırasında açıkça talep
              ettiğiniz anlık iletişim ve bilgi toplumu hizmetinin teknik olarak sağlanabilmesi,
              mesajlarınızın tarafımıza iletilmesi amacıyla işlenmektedir.
            </span>
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          5. Çerezlerin Saklama Süresi
        </h2>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          Sitemiz 3.taraflarla etkileşimde olduğundan ötürü sitemizde yalnızca yukarıda belirtilen
          3.taraflara ait çerezler yer almaktadır. Sitemizde ayrıyeten başka bir çerez kullanılmadığı
          için tarafımızca saklanan bir çerez de bulunmamaktadır. Ancak sitede yer alan çerezler
          3.taraflara ait olduğundan 3. Tarafların çerez saklama süreleri için lütfen bu sosyal ağların
          çerez aydınlatma metinlerini (düzenli olarak değişebilen) okuyun.
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          4. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği
        </h2>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          İnternet sitemizde kullanılan çerezler (Google Maps ve WhatsApp), doğası gereği üçüncü taraf
          altyapıları üzerinden çalışmaktadır. Bu nedenle, IP adresiniz ve oturum çerezleriniz,
          yalnızca talep ettiğiniz harita görüntüleme ve iletişim hizmetlerinin teknik olarak
          gerçekleştirilebilmesi amacıyla, altyapı sağlayıcıları olan Google LLC ve WhatsApp LLC
          (Meta Platforms, Inc.) sistemlerine aktarılmaktadır. Bu aktarım, hizmetin ifası için zorunlu
          olan teknik veri akışından ibarettir. Lütfen bu sosyal ağların gizlilik bildirimini ve
          aydınlatma metinlerini (düzenli olarak değişebilen) okuyun.
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          6. İlgili Kişinin 11. Madde Kapsamındaki Hakları
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Kanun'un 11. maddesi uyarınca veri sorumlusuna başvurarak;
        </p>
        <ul className="mb-4 space-y-2" style={{ color: "var(--law-text)" }}>
          {[
            "Kişisel verilerinizin işlenip işlenmediğini öğrenme,",
            "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,",
            "Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
            "Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,",
            "Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
            "Kanun ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerinizin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
            "İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,",
            "Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p style={{ color: "var(--law-text)" }}>
          Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında
          Tebliğ'e uygun olarak bu haklarınızı kullanmak için taleplerinizi yazılı olarak ofis
          adresimize (Devlet Mah. 263.Sk. No:6/121 Etimesgut/ANKARA),{" "}
          <a href="mailto:ilayda.meray@hs01.kep.tr" style={{ color: "var(--law-gold)" }}>
            ilayda.meray@hs01.kep.tr
          </a>{" "}
          adresine ya da{" "}
          <a href="mailto:av.ilaydameray@gmail.com" style={{ color: "var(--law-gold)" }}>
            av.ilaydameray@gmail.com
          </a>{" "}
          adresine iletebilirsiniz.
        </p>
      </section>
    </>
  );

  const enContent = (
    <>
      <section className="py-8">
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          This text has been prepared within the scope of Article 10 of the Personal Data Protection
          Law No. 6698 ("Law"), the Communiqué on the Procedures and Principles to be Complied with
          in Fulfilling the Obligation to Inform ("Communiqué") and the Guide on Cookie Practices
          ("Guide"), in order to inform you, as a data subject, about the cookies that will be
          processed through the website of Meray Law &amp; Consultancy ("site"), which acts as the
          data controller, during your visit, in accordance with the Law, the Communiqué, the Guide,
          and the applicable legislation.
        </p>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          Please be informed that you can access detailed information regarding the processing of
          your personal data on the Personal Data Protection page.
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          1. Method and Legal Basis of Personal Data Collection
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          The cookies used on our site originate solely from third parties with whom we interact.
          On our website, cookies are placed only through third-party integrations (Google Maps and
          WhatsApp) for the purpose of providing the electronic communication and information society
          services offered to you. The legal bases for the cookies used on our site are specifically
          classified below:
        </p>
        <ul className="mb-4 space-y-3" style={{ color: "var(--law-text)" }}>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
            <span>
              <strong>Google Maps Cookies (Criterion A):</strong> The map integration on our site
              meets the condition of "Criterion A: The cookie is used solely for the purpose of
              enabling communication over an electronic communications network," as set out in the
              Guide on Cookie Practices published by the Personal Data Protection Authority
              (KVKK - 2023/1645 - 28.09.2023).
            </span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
            <span>
              <strong>WhatsApp Cookies (Criterion A):</strong> The WhatsApp integration that enables
              you to contact us directly through our site also meets the condition of "Criterion A:
              The cookie is used solely for the purpose of enabling communication over an electronic
              communications network," as set out in the same Guide (KVKK - 2023/1645 - 28.09.2023).
            </span>
          </li>
        </ul>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          No cookies other than those of Google and WhatsApp are used on our site. This data is
          processed automatically on the basis of Article 5(2)(c) of the Law (processing of personal
          data of the parties to a contract being necessary, provided that it is directly related to
          the establishment or performance of a contract) and Article 5(2)(f) (processing of data
          being mandatory for the legitimate interests pursued by the data controller, provided that
          this processing shall not violate the fundamental rights and freedoms of the data subject).
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          2. Purposes for Which Personal Data Will Be Processed
        </h2>
        <ul className="mb-8 space-y-3" style={{ color: "var(--law-text)" }}>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
            <span>
              <strong>Google Maps Cookies:</strong> Processed solely for the purpose of transmitting
              our location information to you via our website over an electronic communications
              network in a complete and technically accurate manner.
            </span>
          </li>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
            <span>
              <strong>WhatsApp Cookies:</strong> Processed solely for the purpose of technically
              enabling the instant communication and information society service you explicitly
              requested during your visit to our site, and for transmitting your messages to us.
            </span>
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          5. Cookie Retention Period
        </h2>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          Since our site interacts with third parties, only the cookies belonging to the third parties
          specified above are present on our site. As no additional cookies are used on our site, no
          cookies are stored by us. However, since the cookies on the site belong to third parties,
          for the cookie retention periods of those third parties, please read the cookie policies
          (which may change regularly) of these social networks.
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          4. Persons and Purposes to Whom Processed Personal Data May Be Transferred
        </h2>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          The cookies used on our website (Google Maps and WhatsApp) operate by nature through
          third-party infrastructures. For this reason, your IP address and session cookies are
          transferred solely to the systems of Google LLC and WhatsApp LLC (Meta Platforms, Inc.),
          the infrastructure providers, for the purpose of technically executing the map viewing and
          communication services you requested. This transfer constitutes the technical data flow
          necessary for the performance of the service. Please read the privacy notices and
          disclosure texts of these social networks (which may change regularly).
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          6. Rights of the Data Subject under Article 11
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Pursuant to Article 11 of the Law, by applying to the data controller, you have the right to:
        </p>
        <ul className="mb-4 space-y-2" style={{ color: "var(--law-text)" }}>
          {[
            "Learn whether your personal data has been processed,",
            "Request information if your personal data has been processed,",
            "Learn the purpose of processing your personal data and whether it is being used in accordance with that purpose,",
            "Know the third parties to whom your personal data has been transferred, domestically or abroad,",
            "Request correction of your personal data if it is incomplete or inaccurate, and request that the third parties to whom your personal data has been transferred be notified of such correction,",
            "Request deletion or destruction of your personal data in the event that the reasons requiring its processing cease to exist, notwithstanding that it has been processed in accordance with the Law and other relevant legislation, and request that the third parties to whom your personal data has been transferred be notified of such action,",
            "Object to the emergence of a result against you by means of the analysis of your processed data exclusively through automated systems,",
            "Request compensation for damages in the event that you suffer damage due to the unlawful processing of your personal data.",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p style={{ color: "var(--law-text)" }}>
          You may submit your requests regarding your rights in writing to our office address
          (Devlet Mah. 263.Sk. No:6/121 Etimesgut/ANKARA), to{" "}
          <a href="mailto:ilayda.meray@hs01.kep.tr" style={{ color: "var(--law-gold)" }}>
            ilayda.meray@hs01.kep.tr
          </a>{" "}
          or to{" "}
          <a href="mailto:av.ilaydameray@gmail.com" style={{ color: "var(--law-gold)" }}>
            av.ilaydameray@gmail.com
          </a>
          .
        </p>
      </section>
    </>
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--law-navy) 0%, #1a3a5c 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            className="mb-6"
            style={{ color: "white", fontSize: "2.5rem", fontWeight: "700" }}
          >
            {language === "tr" ? "Çerez Aydınlatma Metni" : "Cookie Policy"}
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "var(--law-blue)", fontSize: "1.25rem" }}
          >
            {language === "tr"
              ? "KVKK ve GDPR kapsamında çerez kullanımına ilişkin aydınlatma metni"
              : "Disclosure text regarding cookie usage under KVKK and GDPR"}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {language === "tr" ? trContent : enContent}
        </div>
      </section>
    </div>
  );
}
