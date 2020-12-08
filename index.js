import fs from 'fs';
import Path from 'path';
import {ProjectorWindows32, ProjectorMacApp, ProjectorLinux64} from '@shockpkg/swf-projector';

const opsys = process.platform;

const deleteFolderRecursive = function(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, index) => {
      const curPath = Path.join(path, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

// Windows
const WindowsV3Standard = async () => {
	const projector = new ProjectorWindows32('output/windows/NotessimoV3_Standard.exe');

	projector.iconFile = 'icon/icon.ico';
	projector.patchWindowTitle = 'Notessimo V3';
	projector.versionStrings = {
		FileVersion: '3.0.0',
		ProductVersion: '3.0.0',
		CompanyName: 'Jean-Denis Boivin',
		FileDescription: 'Notessimo V3 - Standard',
		LegalCopyright: 'Copyright 2007-2020 Jean-Denis Boivin',
		ProductName: 'Notessimo V3 - Standard',
		OriginalFilename: 'NotessimoV3_Standard.exe',
		InternalName: 'Notessimo V3 - Standard'
	};

	await projector.withFile('projector/flashplayer_32_sa.exe', 'swf/NotessimoV3_Standard.swf');
}

const WindowsV3Legacy = async () => {
	const projector = new ProjectorWindows32('output/windows/NotessimoV3_Legacy.exe');

	projector.iconFile = 'icon/icon.ico';
	projector.patchWindowTitle = 'Notessimo V3';
	projector.versionStrings = {
		FileVersion: '3.0.0',
		ProductVersion: '3.0.0',
		CompanyName: 'Jean-Denis Boivin',
		FileDescription: 'Notessimo V3 - Legacy',
		LegalCopyright: 'Copyright 2007-2020 Jean-Denis Boivin',
		ProductName: 'Notessimo V3 - Legacy',
		OriginalFilename: 'NotessimoV3_Legacy.exe',
		InternalName: 'Notessimo V3 - Legacy'
	};

	await projector.withFile('projector/flashplayer_32_sa.exe', 'swf/NotessimoV3_Legacy.swf');
}

const WindowsV2 = async () => {
	const projector = new ProjectorWindows32('output/windows/NotessimoV2.exe');

	projector.iconFile = 'icon/icon.ico';
	projector.patchWindowTitle = 'Notessimo V2';
	projector.versionStrings = {
		FileVersion: '2.0.0',
		ProductVersion: '2.0.0',
		CompanyName: 'Jean-Denis Boivin',
		FileDescription: 'Notessimo V2',
		LegalCopyright: 'Copyright 2007-2020 Jean-Denis Boivin',
		ProductName: 'Notessimo V2',
		OriginalFilename: 'NotessimoV2.exe',
		InternalName: 'Notessimo V2'
	};

	await projector.withFile('projector/flashplayer_32_sa.exe', 'swf/NotessimoV2.swf');
}

const WindowsV1 = async () => {
	const projector = new ProjectorWindows32('output/windows/NotessimoV1.exe');

	projector.iconFile = 'icon/icon.ico';
	projector.patchWindowTitle = 'Notessimo V1';
	projector.versionStrings = {
		FileVersion: '1.0.0',
		ProductVersion: '1.0.0',
		CompanyName: 'Jean-Denis Boivin',
		FileDescription: 'Notessimo V1',
		LegalCopyright: 'Copyright 2007-2020 Jean-Denis Boivin',
		ProductName: 'Notessimo V1',
		OriginalFilename: 'NotessimoV1.exe',
		InternalName: 'Notessimo V1'
	};

	await projector.withFile('projector/flashplayer_32_sa.exe', 'swf/NotessimoV1.swf');
}

const WindowsTracker = async () => {
	const projector = new ProjectorWindows32('output/windows/Tracker.exe');

	projector.iconFile = 'icon/icon.ico';
	projector.patchWindowTitle = 'Tracker';
	projector.versionStrings = {
		FileVersion: '0.0.0',
		ProductVersion: '0.0.0',
		CompanyName: 'Jean-Denis Boivin',
		FileDescription: 'Tracker',
		LegalCopyright: 'Copyright 2007-2020 Jean-Denis Boivin',
		ProductName: 'Tracker',
		OriginalFilename: 'Tracker.exe',
		InternalName: 'Tracker'
	};

	await projector.withFile('projector/flashplayer_32_sa.exe', 'swf/Tracker.swf');
}

// Mac
const MacV3Standard = async () => {
	const projector = new ProjectorMacApp('output/mac/NotessimoV3_Standard.app');
	projector.iconFile = 'icon/icon.icns';
	projector.binaryName = 'NotessimoV3_Standard';
	//projector.infoPlistFile = 'Info.plist';
	//projector.pkgInfoFile = 'PkgInfo';
	projector.bundleName = 'NotessimoV3_Standard';
	projector.patchWindowTitle = 'Notessimo V3';
	projector.removeFileAssociations = true;
	projector.removeInfoPlistStrings = true;
	//projector.removeCodeSignature = true;

	await projector.withFile('projector/flashplayer_32_sa.dmg', 'swf/NotessimoV3_Standard.swf');
}

const MacV3Legacy = async () => {
	const projector = new ProjectorMacApp('output/mac/NotessimoV3_Legacy.app');
	projector.iconFile = 'icon/icon.icns';
	projector.binaryName = 'NotessimoV3_Legacy';
	//projector.infoPlistFile = 'Info.plist';
	//projector.pkgInfoFile = 'PkgInfo';
	projector.bundleName = 'NotessimoV3_Legacy';
	projector.patchWindowTitle = 'Notessimo V3';
	projector.removeFileAssociations = true;
	projector.removeInfoPlistStrings = true;
	//projector.removeCodeSignature = true;

	await projector.withFile('projector/flashplayer_32_sa.dmg', 'swf/NotessimoV3_Legacy.swf');
}

const MacV2 = async () => {
	const projector = new ProjectorMacApp('output/mac/NotessimoV2.app');
	projector.iconFile = 'icon/icon.icns';
	projector.binaryName = 'NotessimoV2';
	//projector.infoPlistFile = 'Info.plist';
	//projector.pkgInfoFile = 'PkgInfo';
	projector.bundleName = 'NotessimoV2';
	projector.patchWindowTitle = 'Notessimo V2';
	projector.removeFileAssociations = true;
	projector.removeInfoPlistStrings = true;
	//projector.removeCodeSignature = true;

	await projector.withFile('projector/flashplayer_32_sa.dmg', 'swf/NotessimoV2.swf');
}

const MacV1 = async () => {
	const projector = new ProjectorMacApp('output/mac/NotessimoV1.app');
	projector.iconFile = 'icon/icon.icns';
	projector.binaryName = 'NotessimoV1';
	//projector.infoPlistFile = 'Info.plist';
	//projector.pkgInfoFile = 'PkgInfo';
	projector.bundleName = 'NotessimoV1';
	projector.patchWindowTitle = 'Notessimo V1';
	projector.removeFileAssociations = true;
	projector.removeInfoPlistStrings = true;
	//projector.removeCodeSignature = true;

	await projector.withFile('projector/flashplayer_32_sa.dmg', 'swf/NotessimoV1.swf');
}

const MacTracker = async () => {
	const projector = new ProjectorMacApp('output/mac/Tracker.app');
	projector.iconFile = 'icon/icon.icns';
	projector.binaryName = 'Tracker';
	//projector.infoPlistFile = 'Info.plist';
	//projector.pkgInfoFile = 'PkgInfo';
	projector.bundleName = 'Tracker';
	projector.patchWindowTitle = 'Tracker';
	projector.removeFileAssociations = true;
	projector.removeInfoPlistStrings = true;
	//projector.removeCodeSignature = true;

	await projector.withFile('projector/flashplayer_32_sa.dmg', 'swf/Tracker.swf');
}

// Linux
const LinuxV3Standard = async () => {
	const projector = new ProjectorLinux64('output/linux/NotessimoV3_Standard');
	projector.patchWindowTitle = 'Notessimo V3';
	projector.patchMenuRemove = true;
	projector.patchProjectorPath = true;
	projector.patchProjectorOffset = true;

	await projector.withFile('projector/flash_player_sa_linux.x86_64.tar.gz', 'swf/NotessimoV3_Standard.swf');
}

const LinuxV3Legacy = async () => {
	const projector = new ProjectorLinux64('output/linux/NotessimoV3_Legacy');
	projector.patchWindowTitle = 'Notessimo V3';
	projector.patchMenuRemove = true;
	projector.patchProjectorPath = true;
	projector.patchProjectorOffset = true;

	await projector.withFile('projector/flash_player_sa_linux.x86_64.tar.gz', 'swf/NotessimoV3_Legacy.swf');
}

const LinuxV2 = async () => {
	const projector = new ProjectorLinux64('output/linux/NotessimoV2');
	projector.patchWindowTitle = 'Notessimo V2';
	projector.patchMenuRemove = true;
	projector.patchProjectorPath = true;
	projector.patchProjectorOffset = true;

	await projector.withFile('projector/flash_player_sa_linux.x86_64.tar.gz', 'swf/NotessimoV2.swf');
}

const LinuxV1 = async () => {
	const projector = new ProjectorLinux64('output/linux/NotessimoV1');
	projector.patchWindowTitle = 'Notessimo V1';
	projector.patchMenuRemove = true;
	projector.patchProjectorPath = true;
	projector.patchProjectorOffset = true;

	await projector.withFile('projector/flash_player_sa_linux.x86_64.tar.gz', 'swf/NotessimoV1.swf');
}

const LinuxTracker = async () => {
	const projector = new ProjectorLinux64('output/linux/Tracker');
	projector.patchWindowTitle = 'Tracker';
	projector.patchMenuRemove = true;
	projector.patchProjectorPath = true;
	projector.patchProjectorOffset = true;

	await projector.withFile('projector/flash_player_sa_linux.x86_64.tar.gz', 'swf/Tracker.swf');
}

// Cleanup
deleteFolderRecursive("output");
fs.mkdirSync("output");
fs.mkdirSync("output/windows");
fs.mkdirSync("output/mac");
fs.mkdirSync("output/linux");

// Execute
async function Execute() {
	await WindowsV3Standard();
	await WindowsV3Legacy();
	await WindowsV2();
	await WindowsV1();
	await WindowsTracker();

	if (opsys == "darwin") {
		await MacV3Standard();
		await MacV3Legacy();
		await MacV2();
		await MacV1();
		await MacTracker();
	}

	await LinuxV3Standard();
	await LinuxV3Legacy();
	await LinuxV2();
	await LinuxV1();
	await LinuxTracker();
}

Execute();