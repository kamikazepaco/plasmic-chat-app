// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3BrPZrmc1kdrM9wAtZgcTj
// Component: mG6Doo9823
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: D_5NwTMa2Ey/component
import Button from "../../Button"; // plasmic-import: GoXSSwCM9cM/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_plasmic_chat_app.module.css"; // plasmic-import: 3BrPZrmc1kdrM9wAtZgcTj/projectcss
import sty from "./PlasmicAuthComponent.module.css"; // plasmic-import: mG6Doo9823/css

export const PlasmicAuthComponent__VariantProps = new Array("isSignUpFlow");

export const PlasmicAuthComponent__ArgProps = new Array();

function PlasmicAuthComponent__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__cfL8B
        )}
      >
        {"Plasmic Chat App"}
      </div>

      <TextInput
        data-plasmic-name={"emailInput"}
        data-plasmic-override={overrides.emailInput}
        className={classNames("__wab_instance", sty.emailInput)}
        placeholder={"Enter your email"}
        type={"text"}
      />

      <TextInput
        data-plasmic-name={"passwordInput"}
        data-plasmic-override={overrides.passwordInput}
        className={classNames("__wab_instance", sty.passwordInput)}
        placeholder={"Enter your password"}
        type={"password"}
      />

      <Button
        className={classNames("__wab_instance", sty.button__wDwjH, {
          [sty.buttonisSignUpFlow__wDwjHMxd0P]: hasVariant(
            variants,
            "isSignUpFlow",
            "isSignUpFlow"
          )
        })}
        color={"green"}
        link={"unset"}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__v70Hm,
            {
              [sty.textisSignUpFlow__v70HmMxd0P]: hasVariant(
                variants,
                "isSignUpFlow",
                "isSignUpFlow"
              )
            }
          )}
        >
          {hasVariant(variants, "isSignUpFlow", "isSignUpFlow")
            ? "Sign Up"
            : "Login"}
        </div>
      </Button>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxisSignUpFlow]: hasVariant(
            variants,
            "isSignUpFlow",
            "isSignUpFlow"
          )
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__a7Vak,
            {
              [sty.textisSignUpFlow__a7VakMxd0P]: hasVariant(
                variants,
                "isSignUpFlow",
                "isSignUpFlow"
              )
            }
          )}
        >
          {hasVariant(variants, "isSignUpFlow", "isSignUpFlow")
            ? "Have an account?"
            : "Dont have an account?"}
        </div>

        <Button
          className={classNames("__wab_instance", sty.button__cpDqR, {
            [sty.buttonisSignUpFlow__cpDqRMxd0P]: hasVariant(
              variants,
              "isSignUpFlow",
              "isSignUpFlow"
            )
          })}
          color={"link"}
          link={`/login`}
        >
          {hasVariant(variants, "isSignUpFlow", "isSignUpFlow")
            ? "Login here"
            : "Sign up here"}
        </Button>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "emailInput", "passwordInput", "freeBox"],
  emailInput: ["emailInput"],
  passwordInput: ["passwordInput"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAuthComponent__ArgProps,
          internalVariantPropNames: PlasmicAuthComponent__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAuthComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuthComponent";
  } else {
    func.displayName = `PlasmicAuthComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicAuthComponent = Object.assign(
  // Top-level PlasmicAuthComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    emailInput: makeNodeComponent("emailInput"),
    passwordInput: makeNodeComponent("passwordInput"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicAuthComponent
    internalVariantProps: PlasmicAuthComponent__VariantProps,
    internalArgProps: PlasmicAuthComponent__ArgProps
  }
);

export default PlasmicAuthComponent;
/* prettier-ignore-end */
