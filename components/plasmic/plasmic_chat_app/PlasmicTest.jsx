// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3BrPZrmc1kdrM9wAtZgcTj
// Component: 5uvEhgkJah
import * as React from "react";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: GoXSSwCM9cM/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_plasmic_chat_app.module.css"; // plasmic-import: 3BrPZrmc1kdrM9wAtZgcTj/projectcss
import sty from "./PlasmicTest.module.css"; // plasmic-import: 5uvEhgkJah/css

export const PlasmicTest__VariantProps = new Array("unnamedGroupOfVariants");

export const PlasmicTest__ArgProps = new Array();

function PlasmicTest__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  return (
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
    >
      <Button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames("__wab_instance", sty.button, {
          [sty.buttonunnamedGroupOfVariants_primary]: hasVariant(
            variants,
            "unnamedGroupOfVariants",
            "primary"
          ),

          [sty.buttonunnamedGroupOfVariants_secondary]: hasVariant(
            variants,
            "unnamedGroupOfVariants",
            "secondary"
          )
        })}
        color={
          hasVariant(variants, "unnamedGroupOfVariants", "secondary")
            ? "softBlue"
            : hasVariant(variants, "unnamedGroupOfVariants", "primary")
            ? "blue"
            : undefined
        }
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTest__ArgProps,
          internalVariantPropNames: PlasmicTest__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTest__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTest";
  } else {
    func.displayName = `PlasmicTest.${nodeName}`;
  }
  return func;
}

export const PlasmicTest = Object.assign(
  // Top-level PlasmicTest renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicTest
    internalVariantProps: PlasmicTest__VariantProps,
    internalArgProps: PlasmicTest__ArgProps
  }
);

export default PlasmicTest;
/* prettier-ignore-end */
