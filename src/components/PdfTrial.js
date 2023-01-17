import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

function PdfTrial() {
  const ref = useRef();

  const options = {
    orientation: "potrait",
    unit: "in",
    format: [8.3, 11.7],
  };

  return (
    <div>
      <Pdf
        targetRef={ref}
        filename="code-example.pdf"
        options={options}
        x={0.5}
        y={0.5}
      >
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref} style={{ width: "700px", textAlign: "center" }}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          doloribus fugit iure sapiente, totam consequuntur minima error earum
          quis quod. Nihil, illum sunt. Adipisci, itaque tempora. Adipisci hic
          aperiam deserunt? Nihil, repellat! Voluptatibus incidunt non accusamus
          quasi cumque. Nihil ipsa maxime omnis, aut similique commodi ut
          doloremque explicabo hic est porro at pariatur odio placeat sit esse.
          Illum, ea ut. Aperiam voluptatibus, adipisci quo esse
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          atque reiciendis harum maiores, commodi optio quaerat neque facere
          nobis laborum inventore, itaque accusantium praesentium molestias
          suscipit est expedita facilis aliquam. Alias modi voluptatum
          consequatur in, molestias ipsa perferendis, animi laboriosam
          quibusdam, optio porro! Impedit consequuntur quam fugit fugiat quaerat
          debitis sint, nisi, repudiandae ducimus voluptas hic. Beatae vel
          incidunt expedita!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          atque reiciendis harum maiores, commodi optio quaerat neque facere
          nobis laborum inventore, itaque accusantium praesentium molestias
          suscipit est expedita facilis aliquam. Alias modi voluptatum
          consequatur in, molestias ipsa perferendis, animi laboriosam
          quibusdam, optio porro! Impedit consequuntur quam fugit fugiat quaerat
          debitis sint, nisi, repudiandae ducimus voluptas hic. Beatae vel
          incidunt expedita!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          atque reiciendis harum maiores, commodi optio quaerat neque facere
          nobis laborum inventore, itaque accusantium praesentium molestias
          suscipit est expedita facilis aliquam. Alias modi voluptatum
          consequatur in, molestias ipsa perferendis, animi laboriosam
          quibusdam, optio porro! Impedit consequuntur quam fugit fugiat quaerat
          debitis sint, nisi, repudiandae ducimus voluptas hic. Beatae vel
          incidunt expedita!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          atque reiciendis harum maiores, commodi optio quaerat neque facere
          nobis laborum inventore, itaque accusantium praesentium molestias
          suscipit est expedita facilis aliquam. Alias modi voluptatum
          consequatur in, molestias ipsa perferendis, animi laboriosam
          quibusdam, optio porro! Impedit consequuntur quam fugit fugiat quaerat
          debitis sint, nisi, repudiandae ducimus voluptas hic. Beatae vel
          incidunt expedita!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          atque reiciendis harum maiores, commodi optio quaerat neque facere
          nobis laborum inventore, itaque accusantium praesentium molestias
          suscipit est expedita facilis aliquam. Alias modi voluptatum
          consequatur in, molestias ipsa perferendis, animi laboriosam
          quibusdam, optio porro! Impedit consequuntur quam fugit fugiat quaerat
          debitis sint, nisi, repudiandae ducimus voluptas hic. Beatae vel
          incidunt expedita!
        </p>
      </div>
    </div>
  );
}

export default PdfTrial;
