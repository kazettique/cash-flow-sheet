import { useEffect, useRef, useState } from 'react';

export default function TestMobileViewPort() {
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef) {
      const currentWindowHeight = window.innerHeight;
      setContainerHeight(currentWindowHeight);
    }
  }, [elementRef]);

  const style = containerHeight ? { height: containerHeight } : {};

  return (
    <div className="h-full w-screen flex flex-col" ref={elementRef} style={style}>
      <div data-header className="bg-blue-300 h-11 shrink-0 w-full">
        <div>header</div>
        <div>containerHeight: {containerHeight}px</div>
      </div>
      <div data-body className="grow w-full bg-neutral-300 overflow-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae explicabo distinctio quibusdam eum
        earum id velit nihil eius. Repellat, mollitia aut. Laboriosam porro temporibus nobis deserunt et, non ullam
        neque dignissimos impedit, voluptatem soluta quibusdam excepturi consectetur, doloribus quo odit numquam
        voluptatum consequatur ab voluptatibus aperiam quia. Minima, aperiam! Libero culpa eius asperiores consectetur,
        deleniti qui. Esse laboriosam sit cum totam perspiciatis obcaecati voluptatibus. Quia fuga dolorem quidem.
        Inventore rerum libero officia asperiores aliquam amet? Excepturi in explicabo laudantium autem cupiditate hic
        at quam magni natus voluptates, eligendi voluptas error porro rerum officiis, mollitia unde distinctio nihil
        reiciendis aperiam, recusandae ut fugit ratione facilis? Repudiandae architecto, ex veritatis dolorum nulla
        velit aspernatur itaque doloribus ad quo nesciunt explicabo. Impedit aliquam porro sequi tempore assumenda sit
        obcaecati illum, doloribus amet mollitia, nemo atque laboriosam inventore facilis libero cumque. Impedit beatae
        reprehenderit sequi eum qui fuga asperiores reiciendis omnis quasi, vero magni eligendi ipsa ut accusamus
        deserunt nisi eos in incidunt optio quaerat nesciunt? Iure unde nulla voluptas optio praesentium, minima vel?
        Eum sint tempora, illo deserunt architecto dolor eaque atque fugiat commodi, esse laborum minima sequi ad
        maiores id! Magnam hic dolore enim rem. Autem saepe temporibus sapiente ut, vel animi suscipit? At sequi
        aspernatur ut sit veritatis, eaque ratione accusamus laborum molestiae? Dolorem, alias iure! Sunt est incidunt,
        porro magni quas amet similique, sapiente nulla consectetur accusamus rerum illum modi repellendus deserunt
        sequi assumenda dignissimos quasi nemo soluta minus, enim mollitia iste veniam in. Cumque ex, illo minus a
        deleniti eveniet, vero fugit, iste placeat tempore asperiores! Autem architecto adipisci reprehenderit laborum
        unde doloribus repellendus voluptatem molestiae perferendis neque! Error debitis modi saepe laborum quia,
        tempora, laboriosam perferendis dolore asperiores, quis inventore quasi delectus? Quo ab culpa inventore fugiat
        consectetur, facere maxime recusandae quos voluptatum dignissimos beatae alias sequi corrupti ad saepe debitis
        qui repudiandae blanditiis delectus necessitatibus quae eligendi excepturi, temporibus expedita? Exercitationem,
        dignissimos expedita eligendi aspernatur quibusdam eum repudiandae eaque fuga ullam asperiores, harum sed. Alias
        cumque explicabo provident, perspiciatis eligendi ipsam placeat esse iure molestias, assumenda culpa, molestiae
        libero est. Optio enim voluptatum facere tempora officia perspiciatis, quaerat vitae provident consequatur totam
        ipsa libero expedita repellendus odio vel cum maiores eius amet placeat esse nulla earum distinctio a est. Vero
        amet facilis facere, blanditiis ab delectus optio magnam aperiam incidunt nesciunt est vel sed, ullam mollitia,
        temporibus exercitationem molestiae dolorum! Sunt vitae esse id ducimus iusto nihil alias numquam nam quod
        corporis! Nemo quidem vel error sit, officiis praesentium quisquam odit neque! Pariatur dolorem earum et
        expedita tempore nisi iusto. Debitis sequi esse suscipit molestiae perspiciatis id saepe inventore
        exercitationem iusto. Perspiciatis eum voluptatem quis facere ipsum earum dolorem, perferendis beatae porro
        veniam ex! Dicta voluptatum asperiores voluptates corporis tempore libero labore sequi provident ratione vel
        laborum commodi tempora esse doloremque, sed soluta id? Officiis sapiente excepturi, placeat aut eum explicabo
        obcaecati iusto consequuntur amet cumque doloremque nemo, porro saepe eligendi quod beatae culpa assumenda eos
        tempore exercitationem numquam dolore velit! Deleniti perspiciatis totam unde veniam.
      </div>
      <div data-footer className="w-full h-8 shrink-0 bg-blue-300">
        footer
      </div>
    </div>
  );
}
