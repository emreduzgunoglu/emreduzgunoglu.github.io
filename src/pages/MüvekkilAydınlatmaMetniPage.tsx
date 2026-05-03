import { useLanguage } from "../contexts/LanguageContext";

export function MüvekkilAydınlatmaMetniPage() {
  const { language } = useLanguage();

  const trContent = (
    <>
      <section className="py-8">
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          İşbu Aydınlatma Metni, veri sorumlusu sıfatıyla hareket eden Devlet Mah. 262.Cad. No:6/121
          Etimesgut/ANKARA adresinde mukim Avukat İlayda MERAY tarafından, 6698 sayılı Kişisel
          Verilerin Korunması Kanunu'nun ("Kanun" veya "KVKK") 10. maddesi ile Aydınlatma
          Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında,
          vekâlet ilişkisi kurulması ve avukatlık hizmetlerinin yürütülmesi süreçlerinde kişisel
          verilerinizin işlenmesine ilişkin usul ve esaslar hakkında sizleri bilgilendirmek amacıyla
          hazırlanmıştır.
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          1. KİŞİSEL VERİLERİN İŞLENME AMACI
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Müvekkil, müvekkil çalışanı, bir davanın ya da hukuki uyuşmazlığın karşı tarafı olmanız,
          bir davada ya da hukuki uyuşmazlıkta tanıklık yapmanız, hukuki görüş talep etmeniz veya
          başka bir şekilde yer almanız halinde; elde edilen kimlik bilgileriniz (Ad-soyad, T.C.
          kimlik numarası vb.), iletişim bilgileriniz (Telefon, e-posta, adres), iban ve/veya banka
          hesabı bilgileriniz, hukuki işlem bilgileriniz ve dava/icra dosyasına konu olabilecek diğer
          verileriniz ile gerektiği takdirde özel nitelikli kişisel verileriniz (sağlık verileri,
          ceza mahkûmiyeti verileri vb.);
        </p>
        <ul className="mb-4 space-y-2" style={{ color: "var(--law-text)" }}>
          {[
            "Avukatlık Kanunu ve ilgili mevzuat uyarınca hukuk ve danışmanlık hizmetlerinin ifası, Vekâlet ilişkisinin kurulması ve dava ve icra takiplerinin yürütülmesi, sözleşme ve yasadan doğan mesleki sorumlulukların yerine getirilmesi,",
            "Yetkili kamu kurum ve kuruluşlarına (Mahkemeler, İcra Daireleri, Noterler vb.) bilgi ve belge sunulması,",
            "İletişim faaliyetlerinin yürütülmesi ve tarafınızla irtibatın sağlanması,",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          amaçlarıyla, Kanun'un 4. maddesinde belirtilen genel ilkelere uygun olarak; "belirli, açık ve
          meşru amaçlar için işlenme" ve "işlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma"
          prensipleri gözetilerek işlenmektedir.
        </p>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Aşağıda yer alan özel nitelikli kişisel verileriniz kanunlarda öngörülmesi nedeniyle ve
          hukuki yükümlülüğümüzü yerine getirmek, açık rıza hukuki sebeplerine dayalı olarak
          işlenmektedir:
        </p>
        <ul className="mb-4 space-y-2" style={{ color: "var(--law-text)" }}>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>▪</span>
            <span>
              Hukuki görüş, dava ve hukuki işlemlere konu olması halinde ceza mahkumiyetine ilişkin
              bilgileriniz, dernek, vakıf ve sendika üyelik bilgileriniz ve hukuki işlem içeriğine
              göre KVKK 6. maddede yazılı diğer özel nitelikli kişisel verileriniz
            </span>
          </li>
        </ul>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Aşağıda yer alan özel nitelikli kişisel verileriniz, açık rızanıza istinaden işlenmektedir:
        </p>
        <ul className="mb-8 space-y-2" style={{ color: "var(--law-text)" }}>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>▪</span>
            <span>
              Hukuki görüş, dava ve hukuki işlemlere konu olması halinde sağlık bilgileriniz ve
              KVKK 6/3'teki açık rıza gerekmeksizin işleme şartlarından birinin varlığı olmaması
              halinde diğer özel nitelikli verileriniz, açık rızanıza istinaden işlenecektir.
            </span>
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          3. KİŞİSEL VERİ TOPLAMANIN YÖNTEMİ VE HUKUKİ SEBEBİ
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Kişisel verileriniz; tarafınızca sunulan bilgi ve belgeler, vekâletname, sözleşmeler,
          elektronik posta yazışmaları sözlü, yazılı veya elektronik ortamda toplanmaktadır. Kişisel
          verileriniz aşağıdaki hukuki sebeplere dayalı olarak işlenmektedir:
        </p>
        <ul className="mb-8 space-y-3" style={{ color: "var(--law-text)" }}>
          {[
            "Kanunlarda açıkça öngörülmesi (Md. 5/2-a): 1136 sayılı Avukatlık Kanunu, HMK, İİK ve ilgili mevzuat gereği.",
            'Sözleşmenin kurulması veya ifası (Md. 5/2-c): Avukatlık sözleşmesi ve vekâlet ilişkisinin gereği olarak; "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması".',
            'Meşru Menfaat (Md. 5/2-f): "İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması.',
            "Md. 6/2-a, Md.6/2-b kapsamında somut olayın niteliğine göre özel nitelikteki kişisel verileriniz işlenebilir",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          4. İŞLENEN KİŞİSEL VERİLERİN KİMLERE VE HANGİ AMAÇLA AKTARILABİLECEĞİ
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Toplanan kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda
          ve Kanun'un 8. maddesine uygun olarak;
        </p>
        <ul className="mb-8 space-y-3" style={{ color: "var(--law-text)" }}>
          {[
            "Yargısal süreçlerin yürütülmesi amacıyla Mahkemeler, İcra Daireleri, Savcılıklar, Arabuluculuk Büroları,",
            "Resmi kurum taleplerinin karşılanması amacıyla ilgili kamu kurum ve kuruluşlarına,",
            "Hukuki işlemin gereği olarak Noterlere,",
            "Mevzuatın izin verdiği hallerde ve savunma hakkının kullanılması kapsamında karşı taraf vekillerine,",
            "Hizmet aldığımız bulut sunucularının (server) yurt dışında bulunması, e posta, WhatsApp veya LinkedIn yoluyla (mail sunucusu) kişisel verilerinizin yurt dışına aktarılmasına sebep olmaktadır.",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          Tüm bu aktarımlar sadece iş faaliyetlerinin yürütülmesi için veri güvenliğiniz sağlanarak
          ve gerekli tedbirler alınarak yapılmaktadır.
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          5. KİŞİSEL VERİ GÜVENLİĞİ VE İMHA
        </h2>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          Tarafımızca, "kişisel verilerin hukuka aykırı olarak işlenmesini önlemek, kişisel verilere
          hukuka aykırı olarak erişilmesini önlemek ve kişisel verilerin muhafazasını sağlamak
          amacıyla uygun güvenlik düzeyini temin etmeye yönelik gerekli her türlü teknik ve idari
          tedbirleri alma yükümlülüğü" titizlikle yerine getirilmektedir. Hizmet ilişkisinin sona
          ermesi ve "işlenmesini gerektiren sebeplerin ortadan kalkması halinde kişisel veriler resen
          veya ilgili kişinin talebi üzerine veri sorumlusu tarafından silinir, yok edilir veya anonim
          hale getirilir."
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          6. İLGİLİ KİŞİNİN HAKLARI (KVKK Md. 11)
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Kişisel veri sahibi olarak Kanun'un 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
        </p>
        <ul className="mb-4 space-y-2" style={{ color: "var(--law-text)" }}>
          {[
            "Kişisel verilerinizin işlenip işlenmediğini öğrenme, kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,",
            "Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
            "Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,",
            "Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,",
            "Kanun'un 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme, düzeltme, silme ve yok etme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
            "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme, kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p style={{ color: "var(--law-text)" }}>
          Bu haklarınızı kullanmak için taleplerinizi yazılı olarak ofis adresimize,{" "}
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
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          This Disclosure Text has been prepared by Attorney İlayda MERAY, residing at Devlet Mah.
          262.Cad. No:6/121 Etimesgut/ANKARA, acting as the data controller, pursuant to Article 10
          of the Personal Data Protection Law No. 6698 ("Law" or "KVKK") and the Communiqué on the
          Procedures and Principles to be Complied with in Fulfilling the Obligation to Inform, in
          order to inform you about the procedures and principles regarding the processing of your
          personal data during the establishment of the attorney-client relationship and the conduct
          of legal services.
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          1. PURPOSES OF PROCESSING PERSONAL DATA
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          In the event that you are a client, a client's employee, an opposing party in a case or
          legal dispute, a witness in a case or legal dispute, requesting a legal opinion, or involved
          in any other capacity; the identity information obtained from you (full name, national ID
          number, etc.), your contact information (telephone, e-mail, address), your IBAN and/or
          bank account information, information concerning legal transactions, and other data that may
          be subject to a case or enforcement file, as well as, where necessary, your special
          categories of personal data (health data, criminal conviction data, etc.);
        </p>
        <ul className="mb-4 space-y-2" style={{ color: "var(--law-text)" }}>
          {[
            "Performance of legal and consultancy services pursuant to the Attorney's Law and relevant legislation, establishment of the attorney-client relationship, conduct of litigation and enforcement proceedings, fulfillment of professional responsibilities arising from contracts and law,",
            "Submission of information and documents to competent public authorities and institutions (Courts, Enforcement Offices, Notaries, etc.),",
            "Conducting communication activities and maintaining contact with you,",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          are processed in accordance with the general principles set forth in Article 4 of the Law,
          observing the principles of "processing for specific, explicit and legitimate purposes" and
          "being relevant, limited and proportionate to the purposes for which they are processed."
        </p>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          The following special categories of your personal data are processed on the basis of explicit
          legal provisions and for the fulfillment of our legal obligations, as well as on the legal
          ground of explicit consent:
        </p>
        <ul className="mb-4 space-y-2" style={{ color: "var(--law-text)" }}>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>▪</span>
            <span>
              Information regarding criminal convictions, association, foundation and trade union
              memberships, and other special categories of personal data listed in Article 6 of the
              KVKK, to the extent they are subject to legal opinions, cases or legal transactions.
            </span>
          </li>
        </ul>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          The following special categories of your personal data are processed based on your explicit
          consent:
        </p>
        <ul className="mb-8 space-y-2" style={{ color: "var(--law-text)" }}>
          <li className="flex gap-2">
            <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>▪</span>
            <span>
              Your health data, to the extent it is subject to legal opinions, cases or legal
              transactions, and other special categories of personal data where none of the conditions
              for processing without explicit consent under Article 6(3) of the KVKK are present,
              shall be processed based on your explicit consent.
            </span>
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          3. METHOD AND LEGAL BASIS OF PERSONAL DATA COLLECTION
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Your personal data is collected verbally, in writing or electronically through the
          information and documents you provide, powers of attorney, contracts, and e-mail
          correspondence. Your personal data is processed on the following legal bases:
        </p>
        <ul className="mb-8 space-y-3" style={{ color: "var(--law-text)" }}>
          {[
            "Explicitly provided by law (Art. 5/2-a): As required by the Attorney's Law No. 1136, the Code of Civil Procedure, the Enforcement and Bankruptcy Law, and relevant legislation.",
            'Establishment or performance of a contract (Art. 5/2-c): As required by the attorney engagement agreement and the attorney-client relationship; "processing of personal data of the parties to a contract being necessary, provided that it is directly related to the establishment or performance of a contract."',
            'Legitimate Interest (Art. 5/2-f): "Processing of data being mandatory for the legitimate interests pursued by the data controller, provided that this processing shall not violate the fundamental rights and freedoms of the data subject."',
            "Special categories of your personal data may be processed within the scope of Art. 6/2-a and Art. 6/2-b depending on the nature of the specific case.",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          4. PERSONS AND PURPOSES TO WHOM PROCESSED PERSONAL DATA MAY BE TRANSFERRED
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          Your collected personal data may be transferred, in accordance with Article 8 of the Law
          and in line with the purposes stated above, to:
        </p>
        <ul className="mb-8 space-y-3" style={{ color: "var(--law-text)" }}>
          {[
            "Courts, Enforcement Offices, Public Prosecutor's Offices, and Mediation Centers for the purpose of conducting judicial proceedings,",
            "Relevant public institutions and organizations for the purpose of responding to official requests,",
            "Notaries as required by the legal transaction,",
            "Opposing counsel within the scope of the exercise of the right of defense and to the extent permitted by legislation,",
            "The fact that the cloud servers (servers) from which we receive services are located abroad causes your personal data to be transferred abroad via e-mail, WhatsApp or LinkedIn (mail server).",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          All such transfers are made solely for the conduct of business activities, with your data
          security ensured and necessary precautions taken.
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          5. PERSONAL DATA SECURITY AND DISPOSAL
        </h2>
        <p className="mb-8" style={{ color: "var(--law-text)" }}>
          We diligently fulfill our obligation to "take all necessary technical and administrative
          measures to ensure an appropriate level of security in order to prevent the unlawful
          processing of personal data, to prevent unlawful access to personal data, and to ensure
          the preservation of personal data." Upon termination of the service relationship and "when
          the reasons requiring processing cease to exist, personal data shall be deleted, destroyed
          or anonymized by the data controller ex officio or upon the request of the data subject."
        </p>

        <h2 className="text-xl font-bold mb-4" style={{ color: "var(--law-navy)" }}>
          6. RIGHTS OF THE DATA SUBJECT (KVKK Art. 11)
        </h2>
        <p className="mb-4" style={{ color: "var(--law-text)" }}>
          As a personal data subject, pursuant to Article 11 of the Law, you have the following rights:
        </p>
        <ul className="mb-4 space-y-2" style={{ color: "var(--law-text)" }}>
          {[
            "To learn whether your personal data has been processed, and if so, to request information in this regard,",
            "To learn the purpose of processing your personal data and whether it is being used in accordance with that purpose,",
            "To know the third parties to whom your personal data has been transferred, domestically or abroad,",
            "To request correction of your personal data if it is incomplete or inaccurate,",
            "To request deletion or destruction of your personal data under the conditions set forth in Article 7 of the Law, and to request that correction, deletion and destruction transactions be notified to the third parties to whom personal data has been transferred,",
            "To object to the emergence of a result against you by means of the analysis of your processed data exclusively through automated systems, and to request compensation for damages in the event that you suffer damage due to the unlawful processing of your personal data.",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span style={{ color: "var(--law-gold)", flexShrink: 0 }}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p style={{ color: "var(--law-text)" }}>
          You may submit your requests for exercising these rights in writing to our office address,{" "}
          <a href="mailto:ilayda.meray@hs01.kep.tr" style={{ color: "var(--law-gold)" }}>
            ilayda.meray@hs01.kep.tr
          </a>{" "}
          or{" "}
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
            {language === "tr"
              ? "Müvekkil Aydınlatma Metni"
              : "Client Disclosure Text"}
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "var(--law-blue)", fontSize: "1.25rem" }}
          >
            {language === "tr"
              ? "KVKK kapsamında kişisel verilerin korunması ve işlenmesine ilişkin müvekkil aydınlatma metni"
              : "Client disclosure text regarding the protection and processing of personal data under KVKK"}
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
