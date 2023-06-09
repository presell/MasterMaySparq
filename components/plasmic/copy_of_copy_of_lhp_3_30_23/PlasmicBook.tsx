// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nufvo23EJ9AYcWXG5ppmCa
// Component: 4UoC0vnIbmV5tJ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent
import NavLogoOnly from "../../NavLogoOnly"; // plasmic-import: NTg4eYbqEyMIt6/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_copy_of_lhp_3_30_23.module.css"; // plasmic-import: nufvo23EJ9AYcWXG5ppmCa/projectcss
import sty from "./PlasmicBook.module.css"; // plasmic-import: 4UoC0vnIbmV5tJ/css

export type PlasmicBook__VariantMembers = {};
export type PlasmicBook__VariantsArgs = {};
type VariantPropType = keyof PlasmicBook__VariantsArgs;
export const PlasmicBook__VariantProps = new Array<VariantPropType>();

export type PlasmicBook__ArgsType = {};
type ArgPropType = keyof PlasmicBook__ArgsType;
export const PlasmicBook__ArgProps = new Array<ArgPropType>();

export type PlasmicBook__OverridesType = {
  root?: p.Flex<"div">;
  httpRestApiFetcher?: p.Flex<typeof DataFetcher>;
  calendarEmbed?: p.Flex<typeof Embed>;
};

export interface DefaultBookProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBook__RenderFunc(props: {
  variants: PlasmicBook__VariantsArgs;
  args: PlasmicBook__ArgsType;
  overrides: PlasmicBook__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicBook.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicBook.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicBook.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
          id={(() => {
            try {
              return $ctx.params.slug;
            } catch (e) {
              if (e instanceof TypeError) {
                return undefined;
              }
              throw e;
            }
          })()}
        >
          <DataFetcher
            data-plasmic-name={"httpRestApiFetcher"}
            data-plasmic-override={overrides.httpRestApiFetcher}
            className={classNames("__wab_instance", sty.httpRestApiFetcher)}
            dataName={"fetchDyanamicData" as const}
            errorDisplay={
              <ph.DataCtxReader>
                {$ctx => "Error fetching data"}
              </ph.DataCtxReader>
            }
            headers={{
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer keyVDvhyVSx5Ntbl3"
            }}
            loadingDisplay={
              <ph.DataCtxReader>{$ctx => "Loading..."}</ph.DataCtxReader>
            }
            method={"GET" as const}
            noLayout={false}
            url={(() => {
              try {
                return (
                  "https://api.airtable.com/v0/appmM1mMqcDvugXhY/PlasmicCMS?filterByFormula=slug=" +
                  "'" +
                  $ctx.params.slug +
                  "'"
                );
              } catch (e) {
                if (e instanceof TypeError) {
                  return "https://api.airtable.com/v0/appmM1mMqcDvugXhY/PlasmicCMS?filterByFormula=slug=";
                }
                throw e;
              }
            })()}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <div
                  className={classNames(projectcss.all, sty.freeBox___55J84)}
                >
                  <NavLogoOnly
                    className={classNames(
                      "__wab_instance",
                      sty.navLogoOnly__qy3O5
                    )}
                  />

                  <Embed
                    data-plasmic-name={"calendarEmbed"}
                    data-plasmic-override={overrides.calendarEmbed}
                    className={classNames("__wab_instance", sty.calendarEmbed)}
                    code={(() => {
                      try {
                        return $ctx.fetchDyanamicData.records[0].fields[
                          "Custom Embed"
                        ];
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return '<!-- Calendly inline widget begin -->\n<div class="calendly-inline-widget" data-url="https://calendly.com/presellsecrets/growth-framework" style="min-width:320px;height:630px;"></div>\n<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>\n<!-- Calendly inline widget end -->';
                        }
                        throw e;
                      }
                    })()}
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox___8Fdb9)}
                  >
                    <NavLogoOnly
                      className={classNames(
                        "__wab_instance",
                        sty.navLogoOnly___2ZBnp
                      )}
                    />
                  </div>
                </div>
              )}
            </ph.DataCtxReader>
          </DataFetcher>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "httpRestApiFetcher", "calendarEmbed"],
  httpRestApiFetcher: ["httpRestApiFetcher", "calendarEmbed"],
  calendarEmbed: ["calendarEmbed"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  httpRestApiFetcher: typeof DataFetcher;
  calendarEmbed: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBook__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBook__VariantsArgs;
    args?: PlasmicBook__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBook__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBook__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBook__ArgProps,
          internalVariantPropNames: PlasmicBook__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBook__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBook";
  } else {
    func.displayName = `PlasmicBook.${nodeName}`;
  }
  return func;
}

export const PlasmicBook = Object.assign(
  // Top-level PlasmicBook renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    calendarEmbed: makeNodeComponent("calendarEmbed"),

    // Metadata about props expected for PlasmicBook
    internalVariantProps: PlasmicBook__VariantProps,
    internalArgProps: PlasmicBook__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Book",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBook;
/* prettier-ignore-end */
