// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kmmGrmCVRJPgZ5NNJMDQ4v

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { WordpressProvider } from "@plasmicpkgs/plasmic-wordpress"; // plasmic-import: ABVULPU3AuC/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  wordpressProviderProps?: Partial<
    Omit<React.ComponentProps<typeof WordpressProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, wordpressProviderProps } = props;

  return (
    <WordpressProvider
      {...wordpressProviderProps}
      wordpressUrl={
        wordpressProviderProps && "wordpressUrl" in wordpressProviderProps
          ? wordpressProviderProps.wordpressUrl!
          : ("https://techcrunch.com/" as const)
      }
    >
      {children}
    </WordpressProvider>
  );
}
