const db = require('../models');

const posts = [
    {
        title: `Mencoba membuat tulisan baru`, content: `<p><strong><em>tulisan ini dicetak tebal dan miring serta </em></strong><strong><em><ins>underlined</ins></em></strong></p>
`, excerpt: `Ini ringkasannya`, image: `img-1639983416272.jpg`, author_id: `1`, type: `article`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `mencoba-membuat-tulisan-baru`, tags: `k1,k2`, created_by: `1`, agenda_date: null
    },
    {
        title: `Mencoba membuat tulisan baru lagi`, content: `<p><strong>xlwjdwdjdjwdjwldjwl</strong></p>
`, excerpt: `lalalalalasdsw`, image: `img-1639983840015.jpg`, author_id: `1`, type: `article`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `mencoba-membuat-tulisan-baru-lagi`, tags: `k1,k2`, created_by: `1`, agenda_date: null
    },
    {
        title: `Dimana aku disini dan kemana aku disana`, content: `<p><strong>dwkdjwkwssxwwdwdwdwdwdwdwdwdw111111111</strong></p>
<p><strong><img style="display: block; margin-left: auto; margin-right: auto;" title="IMG-20170410-WA0005.jpg" src="http://localhost:3007/public/images/img-1640126359665.jpg" alt="" width="300" height="215" /></strong></p>
<p><strong><img title="ss_notif_KC.JPG" src="http://localhost:3007/public/images/img-1640126440108.jpg" alt="" width="625" height="286" /></strong></p>`, excerpt: `dwkdwhkssss`, image: `img-1640089556587.jpg`, author_id: `1`, type: `article`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `dimana-aku-disinixx`, tags: `kk11k1k1`, created_by: `1`, agenda_date: null
    },
    {
        title: `Profil SMPN 33 Surabaya`, content: `<p>A school is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers. Most countries have systems of formal education, which is sometimes compulsory. In these systems...</p>
<p>&nbsp;</p>`, excerpt: ``, image: `img-1641209764890.jpg`, author_id: `1`, type: `page`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `profil-smpn-33-surabaya`, tags: ``, created_by: `1`, agenda_date: null
    },
    {
        title: `Hasil seleksi peserta olimiade`, content: `<p>ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" title="New Project (3).png" src="http://localhost:3007/public/images/img-1640130592509.png" alt="" width="358" height="409" /></p>`, excerpt: `Telah dibuka hasil selesksi peserta olimiapde dari SMPN 33 yang akan mengikuti pertandingan pada 17 Agustus 2022.`, image: `img-1640971481880.jpg`, author_id: `1`, type: `news`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `hasil-seleksi-peserta-olimiade`, tags: ``, created_by: `1`, agenda_date: null
    },
    {
        title: `Informasi daftar ulang`, content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`, excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, image: `img-1640971383749.jpg`, author_id: `1`, type: `news`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `informasi-daftar-ulang`, tags: ``, created_by: `1`, agenda_date: null
    },
    { title: `Pelantikan pengurus osis 2021`, content: `<p>Pelantikan pengurus osis 2021</p>`, excerpt: `Pelantikan pengurus osis 2021`, image: `img-1640131102831.jpeg`, author_id: `1`, type: `agenda`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `pelantikan-pengurus-osis-2021`, tags: `Pelantikan pengurus osis 2021`, created_by: `1`, agenda_date: `2022-03-24` },
    {
        title: `SMPN33 Surabaya menyiapkan generasi unggul untuk Indonesia Maju`, content: `<p>Quisquam vel ut sint cum eos hic dolores aperiam.Sed deserunt et.Inventore et et dolor consequatur itaque ut voluptate sed et.Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.Quisquam vel ut sint cum eos hic dolores aperiam.Sed deserunt et.Inventore et et dolor consequatur itaque ut voluptate sed et.Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.</p>
<p>Quisquam vel ut sint cum eos hic dolores aperiam.Sed deserunt et.Inventore et et dolor consequatur itaque ut voluptate sed et.Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.</p>
<p>Quisquam vel ut sint cum eos hic dolores aperiam.Sed deserunt et.Inventore et et dolor consequatur itaque ut voluptate sed et.Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.</p>
<p>Quisquam vel ut sint cum eos hic dolores aperiam.Sed deserunt et.Inventore et et dolor consequatur itaque ut voluptate sed et.Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.</p>`, excerpt: `Quisquam vel ut sint cum eos hic dolores aperiam.Sed deserunt et.Inventore et et dolor consequatur itaque ut voluptate sed et.Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.`, image: `img-1640212234027.jpg`, author_id: `1`, type: `preface`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `smpn33-surabaya-menyiapkan-generasi-unggul-untuk-indonesia-maju`, tags: `rwrwrwrw`, created_by: `1`, agenda_date: null
    },
    {
        title: `Persami dalam rangka penyambutan siswa baru 2022`, content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio</p>
<p>n ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in re</p>`, excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, image: `img-1640960659228.jpg`, author_id: `1`, type: `agenda`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `persami-dalam-rangka-penyambutan-siswa-baru-2022`, tags: `kkka1`, created_by: `1`, agenda_date: `2022-02-12`
    },
    {
        title: `Lllo inventore veritatis et quasi architecto `, content: `<p>&nbsp;ab illo inventore veritatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciu</p>
<p>&nbsp;ab illo inventore veritatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatet quasi architecto&nbsp; ab illo inventore veritatis et quasi architecto</p>
<p>nt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatet quasi architecto&nbsp; ab illo inventore veritatis et quasi architecto&nbsp;</p>`, excerpt: ` ab illo inventore veritatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatet quasi architecto  ab illo inventore veritatis et quasi architecto `, image: `img-1640960946787.jpg`, author_id: `1`, type: `agenda`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `lllo-inventore-veritatis-et-quasi-architecto`, tags: `k1,k2`, created_by: `1`, agenda_date: `2022-04-14`
    },
    {
        title: `But I must explain to you how all this mistaken idea of denouncing pleasure`, content: `<p><strong>But I must explain to you how all this mistaken idea of denouncing pleasure and praising </strong></p>
<p>pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,</p>
<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,</p>`, excerpt: `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure,`, image: `img-1640963849413.jpg`, author_id: `1`, type: `agenda`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `but-i-must-explain-to-you-how-all-this-mistaken-idea-of-denouncing-pleasure`, tags: ``, created_by: `1`, agenda_date: `2022-06-13`
    },
    {
        title: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered`, content: `<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet</p>
<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet</p>`, excerpt: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet`, image: `img-1640964027118.jpg`, author_id: `1`, type: `agenda`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `there-are-many-variations-of-passages-of-lorem-ipsum-available-but-the-majority-have-suffered`, tags: ``, created_by: `1`, agenda_date: `2022-07-19`
    },
    {
        title: `The standard chunk of Lorem Ipsum used since the 1500s`, content: `<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions fr</p>
<p>om the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>`, excerpt: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`, image: `img-1640963151946.jpg`, author_id: `1`, type: `agenda`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `the-standard-chunk-of-lorem-ipsum-used-since-the-1500s`, tags: ``, created_by: `1`, agenda_date: `2022-05-21`
    },
    {
        title: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`, content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`, excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, image: `img-1640964046084.jpg`, author_id: `1`, type: `agenda`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit`, tags: ``, created_by: `1`, agenda_date: `2022-08-31`
    },
    {
        title: `Rnatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt`, content: `<p>rnatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
<p>rnatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>`, excerpt: `rnatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`, image: `img-1640963992242.jpg`, author_id: `1`, type: `agenda`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `rnatur-aut-odit-aut-fugit-sed-quia-consequuntur-magni-dolores-eos-qui-ratione-voluptatem-sequi-nesciunt`, tags: ``, created_by: `1`, agenda_date: `2022-01-22`
    },
    { title: `Anter consequences that are extremely painful`, content: `<p>nter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleanter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a plea</p>`, excerpt: `nter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a plea`, image: `img-1640962978385.jpg`, author_id: `1`, type: `agenda`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `anter-consequences-that-are-extremely-painful`, tags: ``, created_by: `1`, agenda_date: `2022-05-15` },
    {
        title: `Sunt in culpa qui officia deserunt mollit anim id est laborum.`, content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`, excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, image: `img-1640971301039.jpg`, author_id: `1`, type: `news`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `sunt-in-culpa-qui-officia-deserunt-mollit-anim-id-est-laborum`, tags: ``, created_by: `1`, agenda_date: null
    },
    {
        title: `Ullamco laboris nisi ut aliquip ex ea commodo consequat`, content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`, excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, image: `img-1640972589152.jpg`, author_id: `1`, type: `news`, status: `publish`, visibility: `public`, comment_status: `close`, slug: `ullamco-laboris-nisi-ut-aliquip-ex-ea-commodo-consequat`, tags: ``, created_by: `1`, agenda_date: null
    },
]


const create = async () => {
    let mtdt_headline_one = 0
    await Promise.all(posts.map(async (item) => {
        let post = await db.post.create(item)
        if (item.type === 'news' && mtdt_headline_one == 0) {
            await db.post_meta.create({
                name: 'mtdt_headline_one',
                post_id: post.id,
                value: true,
            })
            mtdt_headline_one += 1
        }
    }))

}

module.exports = { create }