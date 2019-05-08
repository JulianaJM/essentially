import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Header from './components/header/Header';

import './app.scss';

const Warning = React.lazy(() => import('./components/Warning'));
class App extends Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="container">
          <h2 className={count > 10 ? 'warning' : ''}> Count: {count}</h2>
          <button
            onClick={() => this.setState(state => ({ count: state.count + 1 }))}
          >
            +1
          </button>
          <button
            onClick={() => this.setState(state => ({ count: state.count - 1 }))}
          >
            -1
          </button>
          {count > 10 ? (
            <React.Suspense fallback={null}>
              <Warning />
            </React.Suspense>
          ) : null}
          <p>
            {`Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor
            sit amet, consectetur, adipisci velit..." "Il ny a personne qui
            naime la souffrance pour elle-même, qui ne la recherche et qui ne la
            veuille pour elle-même..." Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras vel ipsum ultrices tellus fermentum faucibus.
            Donec a ligula ante. Aenean tincidunt turpis arcu, ut pretium dui
            iaculis a. Nunc finibus tempus est, quis sollicitudin dui luctus
            nec. Nulla eros quam, euismod vel tellus vel, ornare iaculis ex.
            Nulla condimentum tempor sapien in vehicula. Nulla sed gravida
            felis. Fusce elementum, risus ut lacinia viverra, enim arcu
            efficitur ipsum, non efficitur erat mauris non urna. Suspendisse
            ullamcorper interdum consequat. Phasellus nec orci sit amet ligula
            fringilla ultricies. Cras eu tortor sapien. Nulla tristique, nulla
            at tincidunt faucibus, leo felis dignissim mauris, in tincidunt
            ipsum mauris non ex. Cras iaculis nulla justo, nec malesuada nulla
            pharetra egestas. Vestibulum faucibus mauris id sem dignissim
            elementum ut sed nibh. Aenean justo risus, varius vel sodales sed,
            tincidunt eu odio. Pellentesque faucibus malesuada justo, et congue
            tortor fringilla non. Suspendisse diam ligula, fringilla vitae nunc
            in, faucibus ultrices diam. Fusce sed nunc eu ante maximus
            fermentum. Morbi vulputate turpis non mattis facilisis. Nulla
            vulputate in velit vitae condimentum. In et diam finibus, efficitur
            tellus vel, semper neque. Proin ac tellus nisi. In massa erat,
            ornare vitae lacus ac, faucibus laoreet neque. Vivamus ante velit,
            pharetra quis enim faucibus, consectetur dapibus sapien. Aliquam
            iaculis eget turpis sed finibus. Etiam mollis risus sapien, at
            blandit ex aliquet id. Phasellus pellentesque euismod aliquam.
            Phasellus suscipit, est in viverra aliquet, purus urna laoreet
            tellus, a iaculis ex leo sed risus. Proin maximus sem eu laoreet
            egestas. Suspendisse potenti. Curabitur ut nisl in erat molestie
            venenatis. Sed eu iaculis magna. Morbi dictum dui vitae lacus
            mollis, ac aliquam velit imperdiet. Quisque et malesuada nunc.
            Integer velit lectus, aliquet quis dapibus a, varius sit amet justo.
            Duis nec vulputate odio. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Curabitur
            iaculis lacus massa, at dictum libero cursus eget. Pellentesque
            posuere lacus lectus, vel auctor sapien sollicitudin sed. Donec
            imperdiet feugiat commodo. In tristique egestas imperdiet. Proin id
            mauris eget nunc feugiat lobortis nec et eros. Suspendisse ut
            dapibus lacus. Integer tellus erat, lobortis efficitur purus
            ultricies, egestas tincidunt metus. Pellentesque vel sapien in ante
            eleifend posuere nec ac orci. Vestibulum euismod nunc quis urna
            sollicitudin, quis condimentum tellus luctus. Vivamus at arcu porta,
            imperdiet sem eget, aliquam elit. Phasellus tincidunt sollicitudin
            turpis, at lacinia est ornare tincidunt. Donec finibus magna sit
            amet ante semper porta. Suspendisse ultrices, lacus eu lacinia
            tincidunt, orci arcu feugiat elit, dictum tincidunt risus neque in
            sapien. Cras eu sem vitae elit mattis feugiat. Etiam elementum
            lobortis velit, sed convallis nunc efficitur quis. Aenean egestas,
            felis eu cursus feugiat, velit est tristique augue, ut placerat
            ligula nunc eu arcu. In lorem metus, auctor eu dolor at, eleifend
            egestas nisl. Cras commodo, enim sed sodales vestibulum, sapien
            purus luctus nibh, porttitor fermentum magna nunc et nisl. Nam a
            mauris sit amet nulla congue fermentum. Curabitur pellentesque est
            eget tempus laoreet. Mauris nec molestie neque. Mauris porta metus
            ac dictum viverra. Vivamus in ligula in velit dapibus gravida. Nunc
            in magna non leo hendrerit cursus. Nam magna nunc, cursus in
            dignissim a, varius sed sapien. Maecenas vehicula a est eu euismod.
            Vestibulum suscipit varius vestibulum. Curabitur ut pretium arcu.
            Morbi tincidunt nulla at euismod tristique. Pellentesque volutpat
            nunc in luctus feugiat. Quisque vitae massa et ex auctor fermentum
            accumsan sed ex. Phasellus leo augue, bibendum eget est at, auctor
            ultrices libero. Donec at diam risus. Morbi ut feugiat est. Sed
            pellentesque ut enim at imperdiet. Quisque quis vehicula sem, vitae
            finibus odio. Cras et odio ac tortor euismod congue. Sed tincidunt
            tortor eu metus elementum vestibulum. Morbi sagittis, quam sit amet
            feugiat consectetur, ligula orci fermentum magna, eget lacinia leo
            mauris nec sapien. Donec sed vehicula dolor, eget maximus quam.
            Proin eu faucibus dui. Donec accumsan lectus sem, bibendum hendrerit
            nunc efficitur a. Maecenas fringilla efficitur massa nec ornare.
            Donec dapibus imperdiet ex, et pretium mauris sollicitudin et.
            Quisque auctor enim eget sapien ullamcorper efficitur. Nulla at
            tincidunt ex. Etiam felis eros, pulvinar at tellus eget, vulputate
            viverra tellus. Sed blandit vel turpis ac gravida. Fusce sed orci
            non diam lacinia condimentum ut et dui. Duis blandit lobortis
            eleifend. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Mauris in metus id massa
            hendrerit ultrices vel id metus. Proin sagittis semper tempus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nullam non mi erat. Suspendisse condimentum quis
            augue non mattis. Nullam nisi risus, scelerisque a viverra ac,
            pulvinar vitae enim. Proin ligula mauris, convallis id ligula at,
            interdum varius ipsum. Sed ipsum eros, venenatis quis odio vitae,
            dapibus porttitor purus. Proin venenatis porta ante, et porta quam
            ullamcorper id. Etiam placerat nibh nec nulla porta, volutpat
            venenatis nunc suscipit. Nam quis elit purus. Quisque id purus
            sollicitudin, luctus risus sit amet, scelerisque sapien. Nam
            molestie varius diam. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Vestibulum id semper
            libero. Ut interdum molestie lectus id fermentum. Phasellus sed elit
            a tellus aliquet ultricies. Donec eu eros scelerisque, ullamcorper
            sem id, ultrices erat. Vivamus convallis dictum semper. Curabitur
            imperdiet vehicula augue, non ullamcorper sapien ultrices non.
            Aenean semper turpis vel neque venenatis, in pharetra neque
            tincidunt. Praesent efficitur leo quis leo feugiat, at dictum augue
            dictum. Proin rutrum felis et neque suscipit egestas. Nullam quis
            iaculis nisl. Fusce condimentum mattis dui, quis ultricies magna
            posuere faucibus. Phasellus varius aliquet risus eget volutpat.
            Quisque eu massa dui. Phasellus euismod est porttitor velit tempus
            interdum. In eu posuere dolor. Donec a lectus sed neque ultricies
            aliquet sit amet maximus nunc. Fusce non urna pharetra, porttitor
            nulla sed, euismod felis. Vestibulum mattis mi sit amet odio
            aliquet, id tincidunt justo sollicitudin. Nunc diam diam,
            pellentesque vitae commodo id, finibus eget lorem. Suspendisse felis
            diam, ornare id nisl eu, imperdiet pulvinar justo. Donec
            pellentesque metus placerat risus lacinia, placerat ultricies urna
            commodo. Donec scelerisque nibh id lorem vulputate mattis. Fusce ac
            enim odio. Phasellus id sapien in lacus suscipit mollis. Etiam vitae
            tellus et ligula mattis rutrum nec sit amet libero. Nunc rutrum,
            mauris eget suscipit bibendum, urna elit auctor eros, eu convallis
            dolor dui vitae ante. Quisque dignissim neque vel nibh tempus
            blandit. Integer vel finibus sem. Integer feugiat sapien in sagittis
            scelerisque. In ultricies, turpis sed varius interdum, purus urna
            dapibus tortor, eget pulvinar lorem massa eget lorem. Maecenas nec
            neque a nibh aliquam aliquet ac sit amet libero. Pellentesque eget
            accumsan nibh. Duis quis mi vel ex vulputate tincidunt. Phasellus
            efficitur justo eget nulla cursus lobortis. Mauris nisi velit,
            consequat sit amet lacus sed, elementum faucibus nisl. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Nunc tempus ante id enim pharetra, ut rutrum metus
            tincidunt. Donec condimentum ullamcorper augue, et tempor augue
            semper id. Suspendisse quis leo ut quam hendrerit maximus tincidunt
            et purus. Cras condimentum ante eget augue faucibus eleifend. Nullam
            tincidunt justo eget tristique pulvinar. Aenean eu neque dolor.
            Vestibulum cursus venenatis ligula id commodo. Morbi eu elit libero.
            Nullam in sagittis enim, id lacinia mi. Nulla quis lectus vitae
            libero rhoncus porta. Sed ornare commodo enim, vitae sollicitudin
            odio ultrices luctus. Nunc volutpat sit amet mi in imperdiet.
            Suspendisse et sem dolor. Morbi bibendum orci eget ipsum mattis,
            luctus interdum nulla lobortis. Praesent et commodo nunc. Integer ac
            dui dui. Integer non aliquam elit. Cras vel consequat sem. Fusce
            mattis ac turpis eu vestibulum. Donec eu elit tincidunt,
            pellentesque ante quis, facilisis ipsum. Ut bibendum dignissim ante,
            at imperdiet quam convallis ut. Pellentesque ac urna gravida, dictum
            nisl nec, condimentum lorem. Duis scelerisque quis quam porta
            volutpat. Vivamus nec tellus at justo placerat elementum sed id
            dolor. Fusce at mi nec ante laoreet iaculis eget sed dui. Donec
            ultricies sodales convallis. Donec ultrices, nisi et molestie
            aliquet, sapien eros varius velit, non tempor velit mauris ac nisi.
            Donec tristique turpis sit amet urna finibus efficitur. Sed id nibh
            non magna cursus faucibus sed non nisi. Suspendisse non tincidunt
            dui, ut varius sapien. In ultricies massa eget arcu hendrerit
            lacinia. Etiam quis congue sem, sit amet laoreet ante. Proin eu
            tempor urna. Morbi vel dapibus arcu. Praesent ornare laoreet arcu,
            ac euismod mi fringilla ut. Quisque non arcu vitae nunc pharetra
            venenatis. Ut imperdiet bibendum augue, non facilisis orci
            ullamcorper sed. Proin feugiat mollis eros, at ullamcorper urna
            placerat vel. Fusce sollicitudin risus ipsum, eu laoreet neque
            vehicula ac. Nullam porttitor quam risus, vel sollicitudin ligula
            lobortis non. Nulla nec enim quis dui commodo tristique. Donec magna
            tellus, pulvinar at semper a, auctor non est. Duis in metus luctus,
            consequat lectus ac, interdum metus. Donec mi turpis, efficitur
            pretium ex in, accumsan varius ligula. Aliquam in felis sed orci
            congue facilisis. Aenean viverra mi ante, et tristique quam bibendum
            sed. Fusce in orci ornare, sagittis lacus pulvinar, iaculis leo.
            Fusce magna ex, congue a feugiat non, suscipit quis lorem. Donec eu
            rutrum neque. Nunc et turpis vitae dui tempus tempor. Vivamus
            fermentum velit a lorem commodo vulputate eu et odio. Sed vehicula
            nulla non orci varius auctor. Fusce auctor bibendum felis ut
            pretium. Sed dapibus id leo sed malesuada. Vestibulum hendrerit est
            vitae sem hendrerit, vitae ullamcorper enim ultrices. Morbi semper
            fringilla orci, et gravida est aliquam et. Ut at molestie nulla, id
            vestibulum dui. Phasellus porta, dui at tristique sodales, orci enim
            faucibus augue, vel feugiat risus magna nec urna. Curabitur varius
            tincidunt tortor. Vestibulum non mauris scelerisque, aliquam dolor
            et, cursus ipsum. Nunc in posuere mi. Donec vel iaculis nunc. Ut
            tristique faucibus velit. Donec scelerisque nisl nec vulputate
            posuere. In blandit finibus augue at tincidunt. Nam accumsan vitae
            sem in feugiat. Proin nibh nulla, fringilla eget sollicitudin a,
            condimentum et dolor. Proin id orci lectus. Suspendisse vulputate
            nibh in erat ultricies tincidunt. Maecenas enim tortor, aliquet
            vitae consequat eget, gravida sit amet neque. Morbi tempus, nisi ac
            ornare imperdiet, quam lorem placerat velit, vel euismod enim leo in
            lorem. Nullam maximus ligula et pellentesque efficitur. Nunc
            scelerisque nisi sagittis enim fringilla, vitae lacinia turpis
            efficitur. Praesent faucibus suscipit risus vitae pellentesque.
            Proin hendrerit maximus lorem, vel ornare sem egestas ut. Vivamus
            quis purus ac dui porttitor lacinia ac ut turpis. Duis metus nulla,
            euismod quis ex sed, maximus luctus sapien. Aliquam erat volutpat.
            Suspendisse id tortor tincidunt, vulputate lacus vitae, molestie
            lacus. Pellentesque blandit risus non varius interdum. Praesent
            imperdiet imperdiet luctus. Fusce nibh mauris, aliquam ut laoreet
            nec, malesuada eu ante. Proin nec libero non elit luctus
            sollicitudin. Vestibulum consectetur, metus sit amet maximus
            imperdiet, sem orci interdum sem, quis porta tellus tellus in enim.
            Cras nec tellus vitae tellus lacinia tempus. Cras quis enim pharetra
            urna convallis commodo. Nam vitae odio id nisi facilisis faucibus.
            Etiam quis tincidunt tellus, in lacinia tortor. Pellentesque id
            tortor sit amet felis hendrerit varius. Aenean bibendum malesuada
            enim id tempor. Etiam risus lectus, luctus vel vehicula vitae,
            ullamcorper sit amet tortor. Proin vestibulum diam leo, ac efficitur
            eros sagittis id. Mauris sit amet dignissim sem. Cras vel lectus ut
            odio molestie pulvinar. Donec porttitor ac ipsum sed imperdiet.
            Mauris eget luctus sapien, sit amet bibendum quam. Aenean ut est at
            erat molestie commodo. Vestibulum orci neque, pharetra id dapibus
            ut, cursus eu augue. In volutpat velit sit amet mauris tincidunt
            gravida. Vestibulum in lectus imperdiet, dapibus ipsum et,
            scelerisque ex. In tempus nulla eget dui faucibus, in porttitor leo
            venenatis. Nullam sed elementum lorem. Duis rhoncus lorem rhoncus
            dictum vulputate. In placerat imperdiet tempus. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Praesent at massa tincidunt, aliquet justo eu, malesuada turpis.
            Morbi aliquam libero lorem, ac sodales tellus euismod molestie.
            Phasellus eleifend neque ac egestas euismod. Sed volutpat tincidunt
            tellus, nec convallis mi maximus sed. Nullam ac erat sapien. Sed vel
            urna ex. Integer convallis nisi eu tellus dignissim, eu auctor nisl
            facilisis. Donec ac dolor metus. Nullam ac scelerisque ante, ac
            convallis arcu. Nullam scelerisque lorem sed metus rutrum, nec
            mollis massa volutpat. Aenean a tristique neque. Integer vestibulum,
            elit at pharetra lacinia, nunc nunc eleifend ligula, a condimentum
            velit nisi eu felis. Cras vitae accumsan urna. Cras dictum vulputate
            sollicitudin. Fusce dapibus nisl lacus, eu vestibulum est vehicula
            ut. Aliquam aliquet fermentum sollicitudin. Suspendisse nec nulla
            sed augue interdum porttitor. Morbi id consequat est. Praesent in
            dui iaculis, mollis risus non, sollicitudin massa. Fusce scelerisque
            turpis id tortor tempor, eget sagittis odio cursus. Pellentesque
            ultrices, erat quis mattis gravida, est nisi ultrices nisl, at
            congue leo nisi et est. Nulla id ultrices lectus. Vestibulum
            pulvinar ex purus, sed commodo elit dapibus id. Vestibulum sed dui
            diam. Pellentesque et turpis vel nibh eleifend pulvinar. Quisque
            congue erat porta, congue sapien convallis, egestas sem. Mauris
            accumsan at eros et mollis. Aliquam finibus blandit sapien nec
            sodales. Vivamus nisi dui, vulputate quis egestas quis, efficitur
            non velit. Pellentesque volutpat commodo arcu, et aliquam urna
            bibendum vel. Etiam at est tristique, faucibus nisl lacinia, auctor
            ligula. Vestibulum pretium quam sed ex pellentesque viverra quis
            maximus enim. Suspendisse at tellus dictum, pharetra leo sed, porta
            est. Fusce risus nisi, tempor ac efficitur ut, accumsan eget ante.
            Etiam in eros feugiat, blandit ipsum viverra, efficitur felis.
            Vivamus elementum nibh tortor, ultrices semper mi sodales nec.
            Suspendisse potenti. Etiam egestas dui at purus porta ultricies.
            Nulla facilisi. Etiam tristique placerat faucibus. Fusce eros velit,
            aliquet a molestie ac, interdum eget libero. Aliquam tincidunt
            pellentesque condimentum. Integer lobortis, diam ut semper porta,
            lorem felis mattis lacus, id venenatis ligula dolor at metus. Aenean
            purus nisl, elementum eget nunc at, placerat bibendum mi. Donec
            eleifend consectetur semper. Nulla euismod tellus vitae dolor
            tempus, vel suscipit ante finibus. Aenean feugiat pretium faucibus.
            Quisque id dui in quam condimentum suscipit ut vel neque. Morbi
            interdum elit ullamcorper nisl volutpat, tincidunt rhoncus erat
            malesuada. Proin augue mi, cursus eu scelerisque at, placerat non
            tortor. Quisque id malesuada massa, at pharetra leo. Morbi efficitur
            libero quam, et ornare sapien blandit a. Proin tellus tortor,
            blandit lacinia nulla id, tempus volutpat felis. Nunc sit amet erat
            nunc. Ut nec lorem orci. Phasellus sed risus ut odio viverra
            laoreet. Suspendisse ac sem mauris. Integer velit quam, consectetur
            vel fringilla in, imperdiet vel mi. Morbi tempus, magna eu tempor
            tincidunt, urna mauris varius urna, vitae faucibus augue nulla eu
            urna. Vivamus malesuada est nec dui hendrerit, et porta erat
            euismod. Quisque ac malesuada felis. Ut sed mauris auctor, bibendum
            quam vitae, feugiat leo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc lorem ligula, maximus quis sem a, vehicula
            bibendum nulla. Aliquam facilisis sem urna, semper semper neque
            maximus quis. Nullam lacinia justo vel nisi egestas, ut viverra dui
            faucibus. Cras elementum maximus metus eget pretium. Fusce nec
            eleifend tortor. Vestibulum finibus neque ex, eget rutrum ipsum
            porttitor sed. Donec vehicula, eros id varius mattis, lacus justo
            tempor elit, a suscipit nisl dui ac felis. Nulla consectetur sapien
            eget lacus rhoncus, non euismod massa malesuada. Vestibulum
            dignissim turpis nec mauris sodales viverra. Vivamus malesuada,
            mauris vel interdum pharetra, ligula ipsum gravida ex, sed laoreet
            risus ipsum vel tortor. Quisque tincidunt turpis a metus mattis, nec
            semper nisi fringilla. Integer mi massa, varius et orci quis, dictum
            convallis quam. Integer sollicitudin erat eget diam pulvinar
            scelerisque. Phasellus nec lectus eget enim tincidunt sollicitudin.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat mollis blandit. Vestibulum risus lacus, efficitur in
            suscipit et, ornare sit amet mi. Suspendisse potenti. Nullam dictum
            libero non euismod pulvinar. Quisque eget laoreet tellus. Proin nibh
            arcu, facilisis id tempus quis, tincidunt ac ex. Cras consequat
            imperdiet nulla sed dapibus. Sed vel nisl arcu. Aliquam odio odio,
            facilisis vitae interdum sed, viverra a lectus. Proin vehicula enim
            id pretium suscipit. Duis vitae molestie odio, sit amet bibendum
            lectus. Curabitur congue pretium tincidunt. Donec ligula turpis,
            sodales eget hendrerit eget, tincidunt lacinia ipsum. Ut eleifend
            vel nisi ac aliquam. Integer rhoncus aliquet quam, ut congue justo.
            Nunc pharetra dapibus arcu, in commodo urna consectetur non. Ut
            vitae dui massa. Nullam ornare iaculis dui, vel pharetra felis
            vestibulum lobortis. Nullam vehicula sed felis ac vestibulum. Sed
            quis felis sit amet sem placerat accumsan sed sed mauris. Vestibulum
            vitae massa pretium, efficitur neque eleifend, viverra turpis. Proin
            tristique lacus sit amet nunc cursus pharetra. In feugiat elementum
            nisl, ut mattis dui facilisis vel. Vestibulum commodo turpis a
            tincidunt molestie. Fusce vitae tristique urna. Donec aliquam
            fermentum sodales. Cras sit amet condimentum nisl, et lobortis
            risus. Pellentesque fringilla mauris et ultricies porta. Praesent eu
            lobortis dolor. Vivamus sed lobortis mauris, ut aliquet velit.
            Maecenas aliquet auctor lacus nec interdum. Maecenas malesuada
            pharetra elit eget eleifend. Nam dictum risus et tellus facilisis,
            in venenatis quam hendrerit. Pellentesque mollis pretium dolor ut
            feugiat. Vivamus quis volutpat sapien. Aliquam ex sapien, pretium et
            mauris id, pharetra convallis erat. Donec vulputate, sem at feugiat
            posuere, felis ante ornare justo, et iaculis nisl justo et ligula.
            Phasellus interdum gravida vestibulum. Cras at diam vel urna ornare
            pretium. Vivamus at nibh mollis, bibendum augue ac, accumsan tortor.
            Curabitur efficitur lacus lectus, a laoreet erat fringilla eu.
            Vivamus at leo placerat, tristique odio nec, facilisis neque. Cras
            tempor sem nulla, non tempor massa facilisis ut. In vel elit in
            neque scelerisque laoreet. Aenean elementum ipsum nisl, non laoreet
            dolor pharetra id. In fringilla leo sit amet mi ultricies, et congue
            elit eleifend. Etiam urna lacus, sodales quis cursus quis, hendrerit
            sit amet lorem. Proin volutpat dui lorem, ac congue mauris finibus
            quis. Praesent id velit a ligula feugiat aliquam at id est. Integer
            auctor tristique nisl, vel volutpat lectus volutpat ac. Donec et
            molestie eros. Integer ut ullamcorper diam, id fringilla velit.
            Nulla a elementum ligula. In diam odio, sagittis at quam non,
            sagittis varius libero. Aliquam pretium, sem id mollis sollicitudin,
            leo lectus pretium turpis, porttitor iaculis arcu justo vel tellus.
            Praesent ultrices augue a lacinia tempor. Suspendisse feugiat
            laoreet ante, et dapibus ipsum fermentum ac. Sed felis leo, sagittis
            et arcu sit amet, consequat sagittis odio. Morbi eget lectus elit.
            Suspendisse purus lacus, porta nec ex ut, imperdiet placerat dolor.
            Curabitur vitae blandit est. Etiam accumsan sem eros, vel ultricies
            magna dictum quis. Duis massa diam, condimentum eget purus sit amet,
            mollis efficitur leo. Mauris a vestibulum ligula. Fusce ultrices
            gravida nisl, et auctor magna sollicitudin quis. Pellentesque
            consectetur, lacus quis condimentum pretium, nunc tellus viverra
            tortor, vitae suscipit quam elit quis tellus. Sed id blandit elit.
            Nam sagittis pharetra metus, ac vulputate dui laoreet eu. Maecenas
            nulla ex, vulputate in mattis eu, rhoncus quis libero. Suspendisse
            suscipit urna eget arcu tristique, eu lobortis sapien tincidunt.
            Curabitur metus eros, sodales in dapibus bibendum, lobortis non
            diam. Duis quis hendrerit augue, semper commodo orci. Etiam
            ultricies sollicitudin urna, ullamcorper aliquam felis posuere nec.
            Proin vulputate sem lectus, nec auctor nunc ultrices eu. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vivamus ultricies, turpis
            quis imperdiet venenatis, magna massa euismod ipsum, at eleifend
            nisi quam euismod nisl. Maecenas convallis nisi massa, a eleifend
            est consectetur non. Vivamus risus odio, condimentum sollicitudin
            maximus vel, pellentesque vitae justo. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae; Integer
            magna orci, sollicitudin eu nibh ut, suscipit elementum erat. Sed
            ornare aliquam justo, non elementum velit sodales in. Integer
            viverra porttitor lorem, et mollis eros commodo ac. Nunc malesuada
            arcu a hendrerit hendrerit. In mollis tincidunt velit sed blandit.
            Aliquam ultricies erat ligula, tincidunt laoreet ipsum pharetra at.
            Donec vulputate ipsum a ligula iaculis elementum. Quisque vehicula
            consectetur tortor, vel vestibulum ipsum bibendum sit amet. Cras
            laoreet vestibulum neque, quis semper ex. Nulla tincidunt dui non
            neque ullamcorper, sit amet imperdiet nulla porttitor. Sed non metus
            sed sem rhoncus vestibulum vitae nec urna. Vivamus blandit tellus a
            vehicula mattis. Curabitur mattis, lorem a consequat consequat,
            tellus nunc rutrum neque, non vestibulum eros erat at tortor.
            Curabitur semper convallis nulla, quis suscipit metus consectetur
            ac. Mauris nec turpis tortor. Integer fringilla laoreet blandit.
            Donec lacinia mauris sed erat faucibus, vel pellentesque nulla
            cursus. Sed a elit libero. Mauris et erat nec nisl mattis
            condimentum sed at ex. Quisque blandit neque id rutrum cursus.
            Aenean vitae aliquam eros, non vehicula lectus. Pellentesque aliquet
            nunc est, eu euismod ante luctus vitae. Sed vitae viverra tortor.
            `}
          </p>
        </div>
      </div>
    );
  }
}
// avoid reload state on dev change
// const hotFunction = hot(module);
// export default hotFunction(App);
export default hot(module)(App);
