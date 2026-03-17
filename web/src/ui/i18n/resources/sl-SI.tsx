import MuiLink from "@mui/material/Link";
import { Markdown } from "ui/shared/Markdown";
import type { Translations } from "../types";
import { Icon } from "onyxia-ui/Icon";
import { getIconUrlByName } from "lazy-icons";
import { capitalize } from "tsafe/capitalize";
import { MaybeLink } from "ui/shared/MaybeLink";

export const translations: Translations<"sl"> = {
    Account: {
        profile: "Profil",
        git: "Git",
        storage: "Povezava s shrambo",
        k8sCodeSnippets: "Kubernetes",
        "user-interface": "Nastavitve vmesnika",
        text1: "Moj račun",
        text2: "Dostopajte do različnih informacij o svojem računu.",
        text3: "Upravljajte s svojimi uporabniškimi imeni, e-pošto, gesli in osebnimi žetoni za dostop, ki so neposredno povezani z vašimi storitvami.",
        "personal tokens tooltip":
            "Gesla, ki so ustvarjena za vas in imajo določeno obdobje veljavnosti",
        vault: "Vault"
    },
    AccountProfileTab: {
        "account id": "Identifikator računa",
        "account id helper":
            "Vaši nespremenljivi identifikatorji, povezani z identiteto, ki jo uporabljate za prijavo v platformo",
        "user id": "Uporabniški ID",
        email: "E-pošta",
        "account management": "Upravljanje računa"
    },
    UserProfileForm: {
        "customizable profile": "Prilagodljiv profil",
        "customizable profile helper":
            "Uporabne informacije za samodejno konfiguracijo vaših storitev",
        save: "Shrani",
        restore: "Obnovi"
    },
    ConfirmNavigationDialog: {
        "you have unsaved changes": "Imate neshranjene spremembe!",
        cancel: "Prekliči",
        "continue without saving": "Nadaljuj brez shranjevanja"
    },
    AccountGitTab: {
        gitName: "Uporabniško ime za Git",
        "gitName helper text": ({ gitName, focusClassName }) => (
            <>
                Ta ukaz bo nastavil vaše globalno Git uporabniško ime ob zagonu storitve:&nbsp;
                <code className={focusClassName}>
                    git config --global user.name "{gitName || "<vase_uporabnisko_ime>"}"
                </code>
            </>
        ),
        gitEmail: "E-pošta za Git",
        "gitEmail helper text": ({ gitEmail, focusClassName }) => (
            <>
                Ta ukaz bo nastavil vaš globalni Git e-poštni naslov ob zagonu storitve:&nbsp;
                <code className={focusClassName}>
                    git config --global user.email "
                    {gitEmail || "<vasa_eposta@domena.com>"}"
                </code>
            </>
        ),
        githubPersonalAccessToken: "Osebni žeton za dostop (Git Forge)",
        "githubPersonalAccessToken helper text": ({ focusClassName }) => (
            <>
                S tem žetonom lahko klonirate in pošiljate spremembe v svoje zasebne GitHub ali
                GitLab repozitorije, ne da bi morali vsakič znova vnašati poverilnice.
                <br />
                Ta žeton bo na voljo tudi kot okoljska spremenljivka:&nbsp;
                <span className={focusClassName}>$GIT_PERSONAL_ACCESS_TOKEN</span>
            </>
        )
    },
    AccountStorageTab: {
        "credentials section title": "Povežite svoje podatke s storitvami",
        "credentials section helper":
            "Z Amazon S3 združljiva shramba objektov MinIO. Ti podatki so že samodejno izpolnjeni.",
        "accessible as env":
            "Dostopno znotraj vaših storitev kot okoljska spremenljivka:",
        "init script section title": "Za dostop do shrambe izven storitev datalaba",
        "init script section helper":
            "Prenesite ali kopirajte inicializacijsko skripto v programskem jeziku po vaši izbiri.",
        "expires in": ({ howMuchTime }) => `Potreče čez ${howMuchTime}`
    },
    AccountKubernetesTab: {
        "credentials section title": "Povezava s Kubernetes grozdom",
        "credentials section helper":
            "Poverilnice za neposredno interakcijo s Kubernetes API strežnikom.",
        "init script section title": "Shell skripta",
        "init script section helper": ({ installKubectlUrl }) => (
            <>
                Ta skripta omogoča uporabo ukazov kubectl ali helm na vašem lokalnem računalniku. <br />
                Za uporabo preprosto{" "}
                <MuiLink href={installKubectlUrl} target="_blank">
                    namestite kubectl na svojo napravo
                </MuiLink>{" "}
                in zaženite skripto tako, da jo kopirate in prilepite v svoj terminal.
                <br />
                Nato lahko delovanje potrdite z ukazom&nbsp;
                <code>kubectl get pods</code> ali <code>helm list</code>
            </>
        ),
        "expires in": ({ howMuchTime }) =>
            `Te poverilnice so veljavne naslednjih ${howMuchTime}`
    },
    AccountVaultTab: {
        "credentials section title": "Vault poverilnice",
        "credentials section helper": ({ vaultDocHref, mySecretLink }) => (
            <>
                <MuiLink href={vaultDocHref} target="_blank">
                    Vault
                </MuiLink>{" "}
                je sistem, kjer so shranjene &nbsp;
                <MuiLink {...mySecretLink}>vaše skrivnosti</MuiLink>.
            </>
        ),
        "init script section title": "Uporaba Vault-a iz terminala",
        "init script section helper": ({ vaultCliDocLink }) => (
            <>
                Prenesite ali kopirajte <code>ENV</code> spremenljivke, ki konfigurirajo vaš lokalni{" "}
                <MuiLink href={vaultCliDocLink} target="_blank">
                    Vault CLI
                </MuiLink>
            </>
        ),
        "expires in": ({ howMuchTime }) => `Žeton poteče čez ${howMuchTime}`
    },
    ProjectSettings: {
        "page header title": "Nastavitve projekta",
        "page header help title": ({ groupProjectName }) =>
            groupProjectName === undefined
                ? "Nastavitve vašega osebnega projekta"
                : `Nastavitve za "${groupProjectName}"`,
        "page header help content": ({
            groupProjectName,
            doesUserBelongToSomeGroupProject
        }) => (
            <>
                Ta stran vam omogoča nastavitev parametrov, ki veljajo za
                {groupProjectName === undefined
                    ? " vaš osebni projekt"
                    : ` projekt ${groupProjectName}`}
                .
                <br />
                {groupProjectName !== undefined && (
                    <>
                        Upoštevajte, da je {groupProjectName} skupinski projekt, ki si ga delite z
                        drugimi uporabniki; nastavitve, ki jih spremenite tukaj, bodo veljale za vse
                        člane projekta.
                        <br />
                    </>
                )}
                {doesUserBelongToSomeGroupProject && (
                    <>
                        Med svojimi projekti lahko preklapljate s spustnim menijem v glavi strani.
                        <br />
                    </>
                )}
                Vedite, da lahko nove projekte ustvari le administrator vaše Onyxia instance.
            </>
        ),
        "security-info": "Varnostne informacije",
        "s3-configs": "S3 konfiguracije"
    },
    ProjectSettingsS3ConfigTab: {
        "add custom config": "Dodaj S3 konfiguracijo po meri"
    },
    S3ConfigCard: {
        "data source": "Vir podatkov",
        credentials: "Poverilnice",
        "sts credentials": "Žetoni, ki jih Onyxia dinamično zahteva v vašem imenu (STS)",
        account: "Račun",
        "use in services": "Uporabi v storitvah",
        "use in services helper": `Če je omogočeno, bo ta konfiguracija privzeto uporabljena v vaših storitvah, ki podpirajo integracijo S3.`,
        "use for onyxia explorers": "Uporabi za Onyxia raziskovalce",
        "use for onyxia explorers helper": `Če je omogočeno, bosta to konfiguracijo uporabljala raziskovalec datotek in raziskovalec podatkov.`,
        edit: "Uredi",
        delete: "Izbriši"
    },
    AddCustomS3ConfigDialog: {
        "dialog title": "Nova S3 konfiguracija po meri",
        "dialog subtitle":
            "Določite uporabniški račun storitve po meri ali se povežite z drugo storitvijo, združljivo s S3",
        cancel: "Prekliči",
        "save config": "Shrani konfiguracijo",
        "update config": "Posodobi konfiguracijo",
        "is required": "To polje je obvezno",
        "must be an url": "Ni veljaven URL",
        "not a valid access key id": "To ni videti kot veljaven access key id",
        "url textField label": "URL",
        "url textField helper text": "URL S3 storitve",
        "region textField label": "AWS S3 regija",
        "region textField helper text": "Primer: eu-west-1, če niste prepričani, pustite prazno",
        "workingDirectoryPath textField label": "Pot delovnega imenika",
        "workingDirectoryPath textField helper text": (
            <>
                Tukaj lahko določite bucket in S3 predpono objektov, ki jih imate v lasti na S3
                storitvi. <br />
                Primer: <code>moj-bucket/moja-predpona/</code> ali samo <code>moj-bucket/</code>{" "}
                če ste lastnik celotnega bucketa.
            </>
        ),
        "account credentials": "Poverilnice računa",
        "friendlyName textField label": "Ime konfiguracije",
        "friendlyName textField helper text":
            "To je le v pomoč pri prepoznavanju konfiguracije. Primer: Moj AWS bucket",
        "isAnonymous switch label": "Anonimen dostop",
        "isAnonymous switch helper text": "Vklopite, če tajni ključ (secret access key) ni potreben",
        "accessKeyId textField label": "Access key ID",
        "accessKeyId textField helper text": "Primer: 1A2B3C4D5E6F7G8H9I0J",
        "secretAccessKey textField label": "Secret access key",
        "sessionToken textField label": "Session token",
        "sessionToken textField helper text": "Opcijsko, če niste prepričani, pustite prazno",
        "url style": "Stil URL-ja",
        "url style helper text": `Določite, kako vaš S3 strežnik oblikuje URL za prenos datotek.`,
        "path style label": ({ example }) => (
            <>
                Path style (stil poti)
                {example !== undefined && (
                    <>
                        :&nbsp;
                        <code>{example}moj-podatki.parquet</code>
                    </>
                )}
            </>
        ),
        "virtual-hosted style label": ({ example }) => (
            <>
                Virtual-hosted style
                {example !== undefined && (
                    <>
                        :&nbsp;
                        <code>{example}moj-podatki.parquet</code>
                    </>
                )}
            </>
        )
    },
    TestS3ConnectionButton: {
        "test connection": "Preveri povezavo",
        "test connection failed": ({ errorMessage }) => (
            <>
                Preverjanje povezave ni uspelo z napako: <br />
                {errorMessage}
            </>
        )
    },
    AccountUserInterfaceTab: {
        title: "Nastavitve vmesnika",
        "enable dark mode": "Omogoči temni način",
        "dark mode helper": "Tema vmesnika z nizko svetlobo in temnim ozadjem.",
        "enable beta": "Omogoči beta način",
        "beta mode helper": "Za napredne konfiguracije platforme in funkcije v preizkušanju.",
        "enable dev mode": "Omogoči razvijalski način",
        "dev mode helper": "Omogoči funkcije, ki so trenutno še v razvoju",
        "Enable command bar": "Ukazna vrstica",
        "Enable command bar helper": ({ imgUrl }) => (
            <>
                <MuiLink href={imgUrl} target="_blank">
                    Ukazna vrstica
                </MuiLink>{" "}
                vam omogoča vpogled v ukaze, ki se izvedejo v vašem imenu, ko komunicirate z vmesnikom.
            </>
        )
    },
    SettingField: {
        "copy tooltip": "Kopiraj v odložišče",
        language: "Spremeni jezik",
        "service password": "Privzeto geslo storitve",
        "service password helper text": ({ groupProjectName }) => (
            <>
                To je privzeto geslo, ki se uporablja za zaščito vaših delujočih storitev. <br />
                Ko zaženete storitev, je polje za geslo v zavihku varnost vnaprej izpolnjeno s tem geslom. <br />
                Klik na ikono <Icon size="extra small" icon={getIconUrlByName("Refresh")} /> bo
                ustvaril novo naključno geslo. Vendar upoštevajte, da se geslo ne bo posodobilo za storitve, ki že delujejo. <br />
                Geslo storitve je tisto, ki vam ga Onyxia naroči kopirati v odložišče pred dostopom do delujoče storitve. <br />
                {groupProjectName !== undefined && (
                    <>
                        Upoštevajte, da si to geslo delijo vsi člani projekta ({groupProjectName}).
                    </>
                )}
            </>
        ),
        "not yet defined": "Ni še določeno",
        "reset helper dialogs": "Ponastavi okna z navodili",
        reset: "Ponastavi",
        "reset helper dialogs helper text":
            "Ponastavi sporočilna okna, za katera ste zahtevali, da se ne prikazujejo več"
    },
    FileExplorerEntry: {
        "page title - file explorer": "Raziskovalec datotek",
        "what this page is used for - file explorer":
            "Tukaj lahko brskate po svojih S3 bucketih.",
        "help content": ({ accountTabLink, docHref }) => (
            <>
                Preberite{" "}
                <MuiLink href={docHref} target="_blank">
                    našo dokumentacijo
                </MuiLink>
                . &nbsp;
                <MuiLink {...accountTabLink}>
                    Konfigurirajte MinIO kliente
                </MuiLink>.
            </>
        ),
        "title personal": "Moji podatki",
        "description personal": "Vaše lastne datoteke in nabori podatkov.",
        "title project": ({ projectName }) => `Projekt ${projectName}`,
        "description project": ({ projectName }) =>
            `Skupni prostor za shranjevanje za projekt ${projectName}`,
        tags: ({ type }) => {
            switch (type) {
                case "personal":
                    return "Moji podatki";
                case "project":
                    return "Skupinski podatki";
            }
        }
    },
    S3EntryCard: {
        "space path": "Pot prostora"
    },
    FileExplorerDisabledDialog: {
        "dialog title": "S3 strežnik ni konfiguriran",
        "dialog body":
            "Za to instanco ni konfiguriran noben S3 strežnik. Lahko pa ga dodate ročno, da omogočite S3 raziskovalec datotek.",
        cancel: "Prekliči",
        "go to settings": "Pojdi v nastavitve"
    },
    ShareDialog: {
        title: "Delite svoje podatke",
        close: "Zapri",
        "create and copy link": "Ustvari in kopiraj povezavo",
        "paragraph current policy": ({ isPublic }) =>
            isPublic
                ? "Vaša datoteka je javna, vsak s povezavo jo lahko prenese."
                : "Vaša datoteka je trenutno zasebna.",

        "paragraph change policy": ({ isPublic }) =>
            isPublic
                ? "Če želite omejiti dostop, spremenite status deljenja datoteke."
                : "Če želite deliti datoteko in omogočiti dostop, spremenite status deljenja ali ustvarite začasno povezavo za dostop.",

        "hint link access": ({ isPublic, expiration }) =>
            isPublic
                ? "Vaša povezava je na voljo, dokler je datoteka javna."
                : `Ta povezava bo omogočila dostop do vaših podatkov za obdobje: ${expiration}.`,
        "label input link": "Povezava za dostop"
    },
    SelectTime: {
        "validity duration label": "Trajanje veljavnosti"
    },
    MySecrets: {
        "page title - my secrets": "Moje skrivnosti",
        "what this page is used for - my secrets":
            "Tukaj lahko določite spremenljivke, ki bodo dostopne v vaših storitvah kot okoljske spremenljivke.",
        "learn more - my files": "Če želite izvedeti več o upravljanju datotek,",
        "help content": ({ accountTabLink, docHref }) => (
            <>
                Preberite{" "}
                <MuiLink href={docHref} target="_blank">
                    našo dokumentacijo
                </MuiLink>
                . &nbsp;
                <MuiLink {...accountTabLink}>
                    Konfigurirajte svoj lokalni Vault CLI
                </MuiLink>.
            </>
        )
    },
    SecretsExplorerItem: {
        description: "opis"
    },
    ExplorerItem: {
        description: "opis"
    },
    SecretsExplorerButtonBar: {
        secret: "skrivnost",
        rename: "preimenuj",
        delete: "izbriši",
        "create secret": "Ustvari skrivnost",
        "copy path": "Uporabi v storitvi",
        "create new empty directory": "ustvari nov prazen imenik",
        refresh: "osveži",
        "create what": ({ what }) => `Ustvari ${what}`,
        new: "Novo"
    },
    ExplorerButtonBar: {
        file: "datoteka",
        delete: "izbriši",
        "download directory": "Prenesi",
        "upload file": "Naloži datoteko",
        "copy path": "Kopiraj ime S3 objekta",
        "create new empty directory": "ustvari nov prazen imenik",
        refresh: "osveži",
        new: "Novo",
        share: "Deli",
        "alt list view": "Prikaži seznam",
        "alt block view": "Prikaži mrežo"
    },
    ExplorerDownloadSnackbar: {
        "download preparation": "Priprava prenosa ..."
    },
    ExplorerItems: {
        "empty directory": "Ta imenik je prazen"
    },

    SecretsExplorerItems: {
        "empty directory": "Ta imenik je prazen"
    },
    SecretsExplorer: {
        file: "datoteka",
        secret: "skrivnost",
        create: "ustvari",
        cancel: "prekliči",
        delete: "izbriši",
        "do not display again": "Ne prikaži več",

        "untitled what": ({ what }) => `neimenovan_${what}`,
        directory: "mapa",
        "deletion dialog title": ({ deleteWhat }) => `Izbrišem ${deleteWhat} ?`,
        "deletion dialog body": ({
            deleteWhat
        }) => `Izbrisali boste ${deleteWhat}.
            Te akcije ni mogoče razveljaviti.`,
        "already a directory with this name":
            "Imenik s tem imenom že obstaja",
        "can't be empty": "Ne sme biti prazno",
        "new directory": "Nov imenik"
    },
    Explorer: {
        file: "datoteka",
        secret: "skrivnost",
        create: "ustvari",
        cancel: "prekliči",
        delete: "izbriši",
        "do not display again": "Ne prikaži več",
        "untitled what": ({ what }) => `neimenovan_${what}`,
        directory: "mapa",
        multiple: "predmetov",
        "deletion dialog title": ({ deleteWhat, isPlural }) =>
            `Izbrišem ${isPlural ? "te" : "ta"} ${deleteWhat}?`,
        "deletion dialog body": ({ deleteWhat, isPlural }) => `
        Izbrisali boste ${isPlural ? "te" : "ta"} ${deleteWhat}.
        To dejanje lahko povzroči izgubo podatkov, povezanih s ${isPlural ? "temi" : "tem"} ${deleteWhat}.
        `,
        "already a directory with this name":
            "Imenik s tem imenom že obstaja",
        "can't be empty": "Ne sme biti prazno",
        "new directory": "Nov imenik"
    },
    MySecretsEditor: {
        "do not display again": "Ne prikaži več",
        "add an entry": "Dodaj novo spremenljivko",
        "environnement variable default name": "NOVA_VAR",
        "table of secret": "tabela skrivnosti",

        "key column name": "Ime spremenljivke",
        "value column name": "Vrednost",
        "unavailable key": "Že v uporabi",
        "invalid key empty string": "Ime je obvezno",
        "invalid key _ not valid": "Ne more biti samo _",
        "invalid key start with digit": "Ne sme se začeti s številko",
        "invalid key invalid character": "Neveljaven znak",
        "use this secret": `Uporabi v storitvah`,
        "use secret dialog title": "Uporabi v storitvi",
        "use secret dialog subtitle": "Pot do skrivnosti je bila kopirana",
        "use secret dialog body": `
                Ko zaženete storitev (RStudio, Jupyter, itd.), pojdite v zavihek 
                skrivnosti in prilepite pot skrivnosti, ki je na voljo za ta namen. 
                Vrednosti bodo vbrizgane kot okoljske spremenljivke.
            `,
        "use secret dialog ok": "Razumem"
    },
    MySecretsEditorRow: {
        "key input desc": "Ime okoljske spremenljivke",
        "value input desc": "Vrednost okoljske spremenljivke"
    },
    ExplorerUploadModalDropArea: {
        "browse files": "prebrskaj datoteke",
        "drag and drop or": "Povlecite in spustite ali"
    },
    ExplorerUploadProgress: {
        over: "od",
        importing: "Uvažanje"
    },
    ExplorerUploadModal: {
        "import files": "Uvozi datoteke",
        cancel: "Prekliči",
        minimize: "Minimiziraj"
    },
    ListExplorerItems: {
        "header name": "Ime",
        "header modified date": "Spremenjeno",
        "header size": "Velikost",
        "header policy": "Pravila"
    },
    Header: {
        login: "Prijava",
        logout: "Odjava",
        project: "Projekt",
        region: "Regija"
    },
    LeftBar: {
        reduce: "Zmanjšaj",
        home: "Domov",
        account: "Moj račun",
        projectSettings: "Nastavitve projekta",
        catalog: "Katalog storitev",
        myServices: "Moje storitve",
        mySecrets: "Moje skrivnosti",
        myFiles: "Moje datoteke",
        "divider: services features": "Funkcije storitev",
        "divider: external services features": "Zunanje funkcije storitev",
        "divider: onyxia instance specific features": "Specifične funkcije Onyxia instance",
        dataExplorer: "Raziskovalec podatkov",
        dataCollection: "Zbirka podatkov",
        fileExplorer: "Raziskovalec datotek",
        sqlOlapShell: "SQL Olap Shell"
    },
    AutoLogoutCountdown: {
        "are you still there": "Ste še vedno tam?",
        "you'll soon be automatically logged out":
            "Kmalu boste samodejno odjavljeni."
    },
    Page404: {
        "not found": "Stran ni bila najdena"
    },
    PortraitModeUnsupported: {
        instructions:
            "Za uporabo te aplikacije na telefonu omogočite senzor rotacije in obrnite telefon vodoravno."
    },
    MaybeAcknowledgeConfigVolatilityDialog: {
        "dialog title": "Pozor, konfiguracije so hlapne",
        "dialog body": `Ta Onyxia instanca ne uporablja nobenega mehanizma za trajno shranjevanje konfiguracij. 
            Vse konfiguracije so shranjene v lokalni shrambi brskalnika. To pomeni, da boste v primeru brisanja podatkov 
            brskalnika ali uporabe drugega brskalnika izgubili vse svoje konfiguracije.`,
        "do not show next time": "Ne prikaži več tega sporočila",
        cancel: "Prekliči",
        "I understand": "Razumem"
    },
    Home: {
        "title authenticated": ({ userFirstname }) => `Dobrodošli, ${userFirstname}!`,
        title: "Dobrodošli v Onyxia datalabu",
        "new user": "Prvič v datalabu?",
        login: "Prijava",
        subtitle: "Delajte s Pythonom ali R-om, uživajte v vši procesni moči, ki jo potrebujete!",
        cardTitle1: "Ergonomsko okolje in storitve na zahtevo",
        cardTitle2: "Aktivna in navdušena skupnost vam stoji ob strani",
        cardTitle3: "Hitra, prilagodljiva in spletna hramba podatkov",
        cardText1:
            "Analizirajte podatke, izvajajte porazdeljeno računanje in izkoristite obsežen katalog storitev. Rezervirajte moč, ki jo potrebujete.",
        cardText2:
            "Uporabite in delite vire, ki so vam na voljo: vodiči, usposabljanja in kanali za izmenjavo.",
        cardText3:
            "Za enostaven dostop do vaših podatkov in tistih, ki so vam na voljo iz vaših programov - implementacija S3 API.",
        cardButton1: "Preglejte katalog",
        cardButton2: "Pridružite se skupnosti",
        cardButton3: "Preglejte podatke"
    },
    Catalog: {
        header: "Katalog storitev",
        "no result found": ({ forWhat }) => `Ni rezultatov za ${forWhat}`,
        "search results": "Rezultati iskanja",
        search: "Iskanje",
        "title all catalog": "Vse"
    },
    CatalogChartCard: {
        launch: "Zaženi",
        "learn more": "Več o tem"
    },
    CatalogNoSearchMatches: {
        "no service found": "Nobena storitev ni bila najdena",
        "no result found": ({ forWhat }) => `Ni rezultatov za ${forWhat}`,
        "check spelling": "Preverite črkovanje ali poskusite razširiti iskanje.",
        "go back": "Nazaj na glavne storitve"
    },
    Launcher: {
        sources: ({
            helmChartName,
            helmChartRepositoryName,
            labeledHelmChartSourceUrls
        }) => (
            <>
                Helm chart{" "}
                {
                    <MaybeLink href={labeledHelmChartSourceUrls.helmChartSourceUrl}>
                        {helmChartName}
                    </MaybeLink>
                }{" "}
                pripada Helm repozitoriju{" "}
                {
                    <MaybeLink
                        href={labeledHelmChartSourceUrls.helmChartRepositorySourceUrl}
                    >
                        {helmChartRepositoryName}
                    </MaybeLink>
                }
                .
                {labeledHelmChartSourceUrls.dockerImageSourceUrl !== undefined && (
                    <>
                        {" "}
                        Temelji na Docker sliki{" "}
                        {
                            <MuiLink
                                href={labeledHelmChartSourceUrls.dockerImageSourceUrl}
                                target="_blank"
                            >
                                {helmChartName}
                            </MuiLink>
                        }
                        .
                    </>
                )}
            </>
        ),
        "download as script": "Prenesi kot skripto",
        "api logs help body": ({
            k8CredentialsHref,
            myServicesHref,
            interfacePreferenceHref
        }) => (
            <Markdown
                getLinkProps={({ href }) => {
                    const doOpensNewTab = (() => {
                        switch (href) {
                            case k8CredentialsHref:
                                return true;
                            case myServicesHref:
                                return true;
                            case interfacePreferenceHref:
                                return false;
                            default:
                                return false;
                        }
                    })();

                    return {
                        href,
                        ...(doOpensNewTab ? { target: "_blank", onClick: undefined } : {})
                    };
                }}
            >{`Ukazno vrstico smo zasnovali, da vam omogočimo popoln nadzor nad vašimi Kubernetes namestitvami. 
Tukaj je tisto, kar morate vedeti:

#### Kaj so ti Helm ukazi?  

Ti ukazi so natančni Helm ukazi, ki jih bo Onyxia API izvedel v vašem imenu v vašem Kubernetes imenskem prostoru.  
To vam omogoča, da veste, kaj se dogaja v ozadju, ko komunicirate z vmesnikom.  

#### Posodobitve v realnem času  

Ko komunicirate z vmesnikom, se bodo Helm ukazi samodejno posodobili in odražali vaša dejanja.  

#### Zakaj bi me to zanimalo?  

- **Transparentnost:** Verjamemo, da imate pravico vedeti, katera dejanja se izvajajo v vašem okolju.  
- **Učenje:** Razumevanje teh ukazov vam nudi vpogled v Kubernetes in Helm ter poglablja vaše znanje.  
- **Ročna izvedba:** Te ukaze lahko kopirate in prilepite v terminal s pravicami za pisanje v Kubernetes, kar vam omogoča ročni zagon storitve.  

#### Kako lahko te ukaze izvedem ročno?  

${k8CredentialsHref === undefined ? "" : "Obstajata dva načina za izvedbo teh ukazov:  "}  

${
    k8CredentialsHref === undefined
        ? ""
        : `
- **Lokalni terminal:** Pojdite na [\`Moj račun -> zavihek Kubernetes\`](${k8CredentialsHref}).  
  Tukaj boste našli poverilnice, ki vam omogočajo izvajanje ukazov v vašem Kubernetes imenskem prostoru iz lokalnega terminala.  
`
}

- Če ta instanca Onyxie vključuje storitvi VSCode ali Jupyter, lahko odprete terminal znotraj teh storitev in tam zaženete ukaze.  
  Za konstruktivne ali destruktivne ukaze boste morali zagnati svojo storitev s Kubernetes vlogo \`admin\` ali \`edit\`.  

Z ročno izvedbo ukaza boste storitev še vedno videli na strani [\`Moje storitve\`](${myServicesHref}), kot če bi bila zagnana prek vmesnika.  

Ukazno vrstico lahko onemogočite v zavihku [\`Moj račun -> Nastavitve vmesnika\`](${interfacePreferenceHref}).

Raziskujte in prevzemite nadzor nad svojimi Kubernetes namestitvami!  
        `}</Markdown>
        ),
        form: "Obrazec",
        editor: "Urejevalnik besedila"
    },
    AcknowledgeSharingOfConfigConfirmDialog: {
        "acknowledge sharing of config confirm dialog title":
            "Pozor, konfiguracije so v skupni rabi",
        "acknowledge sharing of config confirm dialog subtitle": ({
            groupProjectName
        }) => `Če shranite to konfiguracijo, jo bo lahko zagnal vsak član projekta ${groupProjectName}.`,
        "acknowledge sharing of config confirm dialog body": `Čeprav Onyxia ni samodejno vstavila osebnih podatkov, pazite, da v obnovljivih konfiguracijah ne delite občutljivih informacij.`,
        cancel: "Prekliči",
        "i understand, proceed": "Razumem, nadaljuj"
    },
    AutoLaunchDisabledDialog: {
        "auto launch disabled dialog title":
            "Funkcija samodejnega zagona je na tej instanci onemogočena",
        "auto launch disabled dialog body": (
            <>
                <b>OPOZORILO</b>: Nekdo vas morda poskuša zavesti v zagon storitve, 
                ki bi lahko ogrozila celovitost vašega imenskega prostora.
                <br />
                Pred zagonom natančno preglejte konfiguracijo storitve.
                <br />
                Če ste v dvomih, se obrnite na svojega administratorja.
            </>
        ),
        ok: "V redu"
    },
    NoLongerBookmarkedDialog: {
        "no longer bookmarked dialog title": "Vaše spremembe ne bodo shranjene",
        "no longer bookmarked dialog body":
            "Ponovno kliknite na ikono zaznamka, da posodobite svojo shranjeno konfiguracijo",
        ok: "V redu"
    },
    FormFieldWrapper: {
        "reset to default": "Ponastavi na privzeto"
    },
    ConfigurationTopLevelGroup: {
        miscellaneous: "Razno",
        "Configuration that applies to all charts":
            "Konfiguracija, ki velja za vse grafe/charts",
        "Top level configuration values": "Vrednosti konfiguracije na najvišji ravni"
    },
    YamlCodeBlockFormField: {
        "not an array": "Pričakovan je niz (array)",
        "not an object": "Pričakovan je objekt",
        "not valid yaml": "Neveljaven YAML/JSON"
    },
    TextFormField: {
        "not matching pattern": ({ pattern }) => `Se ne ujema z vzorcem ${pattern}`,
        "toggle password visibility": "Preklopi vidnost gesla"
    },
    FormFieldGroupComponent: {
        add: "Dodaj"
    },
    AutoInjectSwitch: {
        tooltip: ({ isAutoInjected }) => (
            <>
                Če je omogočeno, bo ta konfiguracija samodejno vbrizgana v vaše storitve. 
                Še vedno jo lahko ročno dodate pozneje ob zagonu storitve, tudi če je to onemogočeno.
                <br />
                <br />
                Trenutno stanje: <strong>{isAutoInjected ? "omogočeno" : "onemogočeno"}</strong>
            </>
        )
    },
    NumberFormField: {
        "below minimum": ({ minimum }) => `Mora biti večje ali enako ${minimum}`,
        "not a number": "Ni številka",
        "not an integer": "Ni celo število"
    },
    MyService: {
        "page title": ({ helmReleaseFriendlyName }) =>
            `Spremljanje ${helmReleaseFriendlyName}`
    },
    PodLogsTab: {
        "not necessarily first logs":
            "To niso nujno prvi dnevniki; starejši dnevniki so bili morda počiščeni",
        "new logs are displayed in realtime": "Novi dnevniki se prikazujejo v realnem času"
    },
    MyServiceButtonBar: {
        back: "Nazaj",
        "external monitoring": "Zunanje spremljanje",
        "helm values": "Helm vrednosti",
        reduce: "Zmanjšaj"
    },
    LauncherMainCard: {
        "friendly name": "Prijazno ime",
        launch: "Zaženi",
        "problem with": "Težava z:",
        cancel: "Prekliči",
        "copy auto launch url": "Kopiraj URL za samodejni zagon",
        "copy auto launch url helper": ({
            chartName
        }) => `Kopiraj URL, ki bo kateremukoli uporabniku te instance omogočil 
            zagon ${chartName} s to konfiguracijo v njihovem imenskem prostoru`,
        "share the service": "Deli storitev",
        "share the service - explain": "Omogoči dostop do storitve članom skupine",
        "restore all default": "Obnovi privzete konfiguracije",
        "bookmark button": ({ isBookmarked }) =>
            `${isBookmarked ? "Izbriši" : "Shrani"} konfiguracijo`,
        "bookmark button tooltip": ({ myServicesSavedConfigsExtendedLink }) => (
            <>
                Shranjene konfiguracije lahko hitro ponovno zaženete na strani&nbsp;
                <MuiLink {...myServicesSavedConfigsExtendedLink} target="_blank">
                    Moje storitve
                </MuiLink>
            </>
        ),
        "version select label": "Različica",
        "version select helper text": ({
            helmCharName,
            helmRepositoryName,
            labeledHelmChartSourceUrls
        }) => (
            <>
                Različica Helm chart-a{" "}
                {
                    <MaybeLink href={labeledHelmChartSourceUrls.helmChartSourceUrl}>
                        {helmCharName}
                    </MaybeLink>
                }{" "}
                ki pripada Helm repozitoriju{" "}
                {
                    <>
                        <MaybeLink
                            href={labeledHelmChartSourceUrls.helmChartRepositorySourceUrl}
                        >
                            {helmRepositoryName}
                        </MaybeLink>
                        .
                    </>
                }
            </>
        ),
        "save changes": "Shrani spremembe",
        "copied to clipboard": "Kopirano v odložišče!",
        "s3 configuration": "S3 konfiguracija",
        "s3 configuration - explain": ({ projectS3ConfigLink }) => (
            <>
                S3 konfiguracija za to storitev.{" "}
                <MuiLink {...projectS3ConfigLink}>S3 Konfiguracija</MuiLink>.
            </>
        )
    },
    Footer: {
        "terms of service": "Pogoji uporabe",
        "change language": "Spremeni jezik",
        "dark mode switch": "Preklop temnega načina"
    },
    MyServices: {
        text1: "Moje storitve",
        text2: "Dostop do vaših delujočih storitev",
        text3: "Storitve je priporočljivo ugasniti takoj, ko jih nehate aktivno uporabljati.",
        "running services": "Delujoče storitve"
    },
    ClusterEventsDialog: {
        title: "Dogodki",
        subtitle: (
            <>
                Dogodki v Kubernetes imenskem prostoru, prenos v realnem času iz{" "}
                <code>kubectl get events</code>
            </>
        )
    },
    MyServicesConfirmDeleteDialog: {
        "confirm delete title": "Ste prepričani?",
        "confirm delete subtitle": "Prepričajte se, da so vaše storitve pripravljene na izbris",
        "confirm delete body shared services":
            "Upoštevajte, da so nekatere vaše storitve v skupni rabi z drugimi člani projekta.",
        "confirm delete body":
            "Ne pozabite poslati svoje kode na GitHub ali GitLab pred prekinitvijo storitev.",
        cancel: "Prekliči",
        confirm: "Da, izbriši"
    },
    MyServicesButtonBar: {
        refresh: "Osveži",
        launch: "Nova storitev",
        trash: "Izbriši vse",
        "trash my own": "Izbriši vse moje storitve"
    },
    MyServicesCard: {
        service: "Storitev",
        "running since": "Zagnano: ",
        open: "Odpri",
        readme: "readme",
        "reminder to delete services": "Ne pozabite izbrisati svojih storitev.",
        status: "Status",
        "container starting": "Zagon vsebnika",
        failed: "Napaka",
        "suspend service tooltip": "Zaustavi storitev in sprosti vire",
        "resume service tooltip": "Nadaljuj s storitvijo",
        suspended: "Zaustavljeno",
        suspending: "Zaustavljanje",
        "share tooltip - belong to someone else": ({
            projectName,
            ownerUsername,
            focusColor
        }) => (
            <>
                To storitev si s člani projekta <span style={{ color: focusColor }}>{projectName}</span> deli uporabnik <span style={{ color: focusColor }}>{ownerUsername}</span>.
            </>
        ),
        "share tooltip - belong to you, shared": ({ projectName, focusColor }) => (
            <>
                To storitev si delijo člani projekta <span style={{ color: focusColor }}>{projectName}</span>. Kliknite za prekinitev deljenja.
            </>
        ),
        "share tooltip - belong to you, not shared": ({ projectName, focusColor }) => (
            <>
                Samo vi imate dostop do te storitve. Kliknite, da jo delite s člani projekta <span style={{ color: focusColor }}>{projectName}</span>.
            </>
        )
    },
    MyServicesRestorableConfigOptions: {
        edit: "Uredi",
        "copy link": "Kopiraj URL povezavo",
        "remove bookmark": "Izbriši",
        "move down": "Premakni dol",
        "move to bottom": "Premakni na dno",
        "move to top": "Premakni na vrh",
        "move up": "Premakni gor"
    },
    MyServicesRestorableConfig: {
        edit: "Uredi",
        launch: "Zaženi"
    },
    MyServicesRestorableConfigs: {
        saved: "Shranjeno",
        expand: "Razširi"
    },
    ReadmeDialog: {
        ok: "V redu",
        return: "Nazaj"
    },
    CopyOpenButton: {
        "first copy the password": "Kliknite za kopiranje gesla...",
        "open the service": "Odpri storitev 🚀"
    },
    MyServicesCards: {
        "running services": "Delujoče storitve"
    },
    NoRunningService: {
        "launch one": "Kliknite tukaj za zagon",
        "no services running": "Nimate nobene delujoče storitve"
    },
    CircularUsage: {
        max: "Največ",
        used: "Uporabljeno",
        "quota card title": ({ what, isLimit }) => {
            const whatTranslated = (() => {
                switch (what) {
                    case "memory":
                        return "RAM";
                    case "cpu":
                        return "CPU";
                    case "storage":
                        return "Shramba";
                    case "count/pod":
                        return "Kubernetes pods";
                    case "nvidia.com/gpu":
                        return "Nvidia GPUs";
                    default:
                        return capitalize(what);
                }
            })();

            return `${whatTranslated} - ${isLimit ? "Omejitev" : "Zahtevano"}`;
        }
    },
    Quotas: {
        "show more": "Prikaži več",
        "resource usage quotas": "Kvote porabe virov",
        "current resource usage is reasonable":
            "Vaša trenutna poraba virov je v mejah normale."
    },
    DataExplorer: {
        "page header title": "Raziskovalec podatkov",
        "page header help title":
            "Predogled vaših Parquet in CSV datotek neposredno v brskalniku!",
        "page header help content": ({ demoParquetFileLink }) => (
            <>
                Za predogled preprosto vnesite <code>https://</code> ali <code>s3://</code> URL naslov podatkovne datoteke.
                <br />
                Datoteka se ne prenese v celoti; njena vsebina se prenaša sproti med brskanjem.
                <br />
                Delite lahko trajno povezavo do datoteke ali celo do specifične vrstice tako, da kopirate URL iz naslovne vrstice.
                <br />
                Niste prepričani, kje začeti? Poskusite s to{" "}
                <MuiLink {...demoParquetFileLink}>testno datoteko</MuiLink>!
            </>
        ),
        column: "stolpec",
        density: "gostota",
        "download file": "Prenesi datoteko",
        "resize table": "Spremeni velikost",
        "unsupported file type": ({ supportedFileTypes }) =>
            `Nepodprt format podatkov. Podprti tipi so: ${supportedFileTypes.join(", ")}.`,
        "no s3 client":
            "S3 klient ni konfiguriran. Pojdite v nastavitve, da ga omogočite za raziskovalca.",
        "unsupported protocol":
            "Nepodprt URL. Podprta protokola sta https:// in s3://.",
        "https fetch error": "Datoteke prek HTTPS ni bilo mogoče pridobiti.",
        "query error": "Napaka DuckDB poizvedbe."
    },
    UrlInput: {
        load: "Naloži",
        reset: "Ponastavi"
    },
    CommandBar: {
        ok: "V redu"
    },
    formattedDate: {
        past1: ({ divisorKey }) => {
            switch (divisorKey) {
                case "now":
                    return "ravnokar";
                case "second":
                    return "pred sekundo";
                case "minute":
                    return "pred minuto";
                case "hour":
                    return "pred eno uro";
                case "day":
                    return "včeraj";
                case "week":
                    return "prejšnji teden";
                case "month":
                    return "prejšnji mesec";
                case "year":
                    return "lani";
            }
        },
        pastN: ({ divisorKey }) => {
            switch (divisorKey) {
                case "now":
                    return "ravnokar";
                case "second":
                    return "pred # sekundami";
                case "minute":
                    return "pred # minutami";
                case "hour":
                    return "pred # urami";
                case "day":
                    return "pred # dnevi";
                case "week":
                    return "pred # tedni";
                case "month":
                    return "pred # meseci";
                case "year":
                    return "pred # leti";
            }
        },
        future1: ({ divisorKey }) => {
            switch (divisorKey) {
                case "now":
                    return "ravnokar";
                case "second":
                    return "čez sekundo";
                case "minute":
                    return "čez minuto";
                case "hour":
                    return "čez eno uro";
                case "day":
                    return "jutri";
                case "week":
                    return "naslednji teden";
                case "month":
                    return "naslednji mesec";
                case "year":
                    return "naslednje leto";
            }
        },
        futureN: ({ divisorKey }) => {
            switch (divisorKey) {
                case "now":
                    return "ravnokar";
                case "second":
                    return "čez # sekund";
                case "minute":
                    return "čez # minut";
                case "hour":
                    return "čez # ur";
                case "day":
                    return "čez # dni";
                case "week":
                    return "čez # tednov";
                case "month":
                    return "čez # mesecev";
                case "year":
                    return "čez # let";
            }
        },
        singular: ({ divisorKey }) => {
            switch (divisorKey) {
                case "second":
                    return "1 sekunda";
                case "minute":
                    return "1 minuta";
                case "hour":
                    return "1 ura";
                case "day":
                    return "1 dan";
                case "week":
                    return "1 teden";
                case "month":
                    return "1 mesec";
                case "year":
                    return "1 leto";
            }
        },
        plural: ({ divisorKey }) => {
            switch (divisorKey) {
                case "second":
                    return "# sekund";
                case "minute":
                    return "# minut";
                case "hour":
                    return "# ur";
                case "day":
                    return "# dni";
                case "week":
                    return "# tednov";
                case "month":
                    return "# mesecev";
                case "year":
                    return "# let";
            }
        }
    },
    CopyToClipboardIconButton: {
        "copied to clipboard": "Kopirano!",
        "copy to clipboard": "Kopiraj v odložišče"
    },
    CustomDataGrid: {
        "empty directory": "Ta imenik je prazen",
        "label rows count": ({ count }) => {
            const plural = count > 1 ? "predmetov" : "predmet";
            return `${count} izbran ${plural}`;
        },
        "label rows per page": "Predmetov na stran"
    },
    CustomDataGridToolbarDensitySelector: {
        toolbarDensity: "Gostota",
        toolbarDensityStandard: "Standardno",
        toolbarDensityComfortable: "Udobno",
        toolbarDensityCompact: "Strnjeno"
    },
    CustomDataGridToolbarColumnsButton: {
        toolbarColumnsLabel: "Stolpci"
    },
    DatasetCard: {
        publishedOn: "Objavljeno",
        datasetPage: "Stran nabora podatkov",
        license: "Licenca:",
        format: "Format",
        size: "Velikost",
        distributions: "Distribucije",
        visualize: "Vizualiziraj",
        unknown: "Neznano"
    },
    DataCollection: {
        "page header help title":
            "Preprosto vnesite https:// URL vaše DCAT JSON-LD sheme",
        "page header title": "Katalog podatkov",
        "page header help content": ({ demoCatalogLink }) => (
            <>
                Vnesite <code>https://</code> URL kataloga podatkov za predogled.
                <br />
                Niste prepričani, kje začeti? Poskusite s tem{" "}
                <MuiLink {...demoCatalogLink}>demo katalogom</MuiLink>!
            </>
        ),
        "https fetch error": "Vira prek HTTPS ni bilo mogoče pridobiti.",
        "invalid json response": "Odgovor ni veljaven JSON.",
        "json-ld compact error": "Napaka pri stiskanju (compact) JSON-LD odgovora.",
        "json-ld frame error": "Napaka pri uokvirjanju (frame) JSON-LD odgovora.",
        "datasets parsing error": "Iz kataloga ni bilo mogoče razbrati naborov podatkov."
    }
};
