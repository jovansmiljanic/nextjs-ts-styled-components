"use client";

// Core types
import type { FC } from "react";

// Global component
import { Button, Heading } from "@components";

// Vendors
import styled, { css } from "styled-components";

const Hero = styled.div``;

interface Hero {}

const index: FC<Hero> = () => {
  return (
    <Hero>
      <Heading as="h3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea odio
        dolores totam tenetur, iure incidunt atque repellat vero dicta eaque
        voluptate voluptas ratione explicabo voluptatum quas reprehenderit.
        Temporibus possimus adipisci quidem asperiores tempore perspiciatis
        dolores numquam. Voluptate magni praesentium tempore eligendi ipsam
        maiores. Dolor in saepe accusantium magnam sequi totam harum? Velit
        totam atque sapiente corporis accusantium voluptas voluptatibus
        voluptates necessitatibus! Aspernatur quidem, impedit nobis modi, sequi
        quasi, ad fugiat magni fuga libero officiis enim id laudantium! Quos
        dolor deserunt reiciendis cupiditate minima officiis doloremque ducimus
        fugiat est possimus beatae sit dignissimos officia eligendi quasi rerum
        dolore fuga quas nihil vero voluptas, suscipit praesentium voluptates.
      </Heading>

      <Button variant="primary">Click me</Button>
    </Hero>
  );
};

export { index as Hero };
