/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
	/** Ente CLI Path - If you wish to use your own CLI, type here the location of your local installation. */
	cliPath: string;
	/** Ente CLI Export Location - If you wish to change the default export path, type here the location of your local installation. */
	exportPath?: string;
	/** Primary Action - Choose whether the primary action should copy or paste the output. */
	primaryAction: "copy" | "paste";
	/** Privacy - Choose whether the export should be deleted after import. */
	deleteExport?: boolean;
};

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences;

declare namespace Preferences {
	/** Preferences accessible in the `index` command */
	export type Index = ExtensionPreferences & {};
	/** Preferences accessible in the `export` command */
	export type Export = ExtensionPreferences & {};
	/** Preferences accessible in the `import` command */
	export type Import = ExtensionPreferences & {};
	/** Preferences accessible in the `delete` command */
	export type Delete = ExtensionPreferences & {};
}

declare namespace Arguments {
	/** Arguments passed to the `index` command */
	export type Index = {};
	/** Arguments passed to the `export` command */
	export type Export = {};
	/** Arguments passed to the `import` command */
	export type Import = {};
	/** Arguments passed to the `delete` command */
	export type Delete = {};
}
