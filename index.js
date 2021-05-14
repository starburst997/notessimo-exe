import fs from 'fs';
import Path from 'path';
import archiver from 'archiver';
import {ProjectorWindows32, ProjectorMacApp, ProjectorLinux64} from '@shockpkg/swf-projector';

const opsys = process.platform;

const deleteFolderRecursive = (path) => {
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

const zip = (dir, output) => {
	var output = fs.createWriteStream(output);
	var archive = archiver('zip');

	archive.on('error', function(err){
	    throw err;
	});

	archive.pipe(output);
	archive.directory(dir, dir.substr(dir.lastIndexOf('/') + 1));
	archive.finalize();
}

const zipFile = (file, output) => {
	var output = fs.createWriteStream(output);
	var archive = archiver('zip');

	archive.on('error', function(err){
	    throw err;
	});

	archive.pipe(output);
	archive.file(file, {name: file.substr(file.lastIndexOf('/') + 1)});
	archive.finalize();
}

const tarFile = (file, output) => {
	var output = fs.createWriteStream(output);
	var archive = archiver('tar', {gzip: true});

	archive.on('error', function(err){
	    throw err;
	});

	archive.pipe(output);
	archive.file(file, {name: file.substr(file.lastIndexOf('/') + 1)});
	archive.finalize();
}

// Windows
const WindowsV3Standard = async () => {
	const projector = new ProjectorWindows32('output/windows/NotessimoV3_Standard.exe');

	projector.iconFile = 'icon/icon.ico';
	projector.patchWindowTitle = 'Notessimo V3';
	projector.removeCodeSignature = true;
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

	await projector.withFile('projector/flashplayer_32.exe', 'swf/NotessimoV3_Standard.swf');
	zipFile('output/windows/NotessimoV3_Standard.exe', 'output/windows/NotessimoV3_Standard_32.zip');

	fs.renameSync('output/windows/NotessimoV3_Standard.exe', 'output/windows/NotessimoV3_Standard_32.exe');

	await projector.withFile('projector/flashplayer_64.exe', 'swf/NotessimoV3_Standard.swf');
	zipFile('output/windows/NotessimoV3_Standard.exe', 'output/windows/NotessimoV3_Standard.zip');
}

const WindowsV3Legacy = async () => {
	const projector = new ProjectorWindows32('output/windows/NotessimoV3_Legacy.exe');

	projector.iconFile = 'icon/icon.ico';
	projector.patchWindowTitle = 'Notessimo V3';
	projector.removeCodeSignature = true;
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

	await projector.withFile('projector/flashplayer_32.exe', 'swf/NotessimoV3_Legacy.swf');
	zipFile('output/windows/NotessimoV3_Legacy.exe', 'output/windows/NotessimoV3_Legacy_32.zip');

	fs.renameSync('output/windows/NotessimoV3_Legacy.exe', 'output/windows/NotessimoV3_Legacy_32.exe');

	await projector.withFile('projector/flashplayer_64.exe', 'swf/NotessimoV3_Legacy.swf');
	zipFile('output/windows/NotessimoV3_Legacy.exe', 'output/windows/NotessimoV3_Legacy.zip');
}

const WindowsV2 = async () => {
	const projector = new ProjectorWindows32('output/windows/NotessimoV2.exe');

	projector.iconFile = 'icon/icon.ico';
	projector.patchWindowTitle = 'Notessimo V2';
	projector.removeCodeSignature = true;
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

	await projector.withFile('projector/flashplayer_32.exe', 'swf/NotessimoV2.swf');
	zipFile('output/windows/NotessimoV2.exe', 'output/windows/NotessimoV2_32.zip');
	
	fs.renameSync('output/windows/NotessimoV2.exe', 'output/windows/NotessimoV2_32.exe');

	await projector.withFile('projector/flashplayer_64.exe', 'swf/NotessimoV2.swf');
	zipFile('output/windows/NotessimoV2.exe', 'output/windows/NotessimoV2.zip');
}

const WindowsV1 = async () => {
	const projector = new ProjectorWindows32('output/windows/NotessimoV1.exe');

	projector.iconFile = 'icon/icon.ico';
	projector.patchWindowTitle = 'Notessimo V1';
	projector.removeCodeSignature = true;
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

	await projector.withFile('projector/flashplayer_32.exe', 'swf/NotessimoV1.swf');
	zipFile('output/windows/NotessimoV1.exe', 'output/windows/NotessimoV1_32.zip');

	fs.renameSync('output/windows/NotessimoV1.exe', 'output/windows/NotessimoV1_32.exe');

	await projector.withFile('projector/flashplayer_64.exe', 'swf/NotessimoV1.swf');
	zipFile('output/windows/NotessimoV1.exe', 'output/windows/NotessimoV1.zip');
}

const WindowsTracker = async () => {
	const projector = new ProjectorWindows32('output/windows/Tracker.exe');

	projector.iconFile = 'icon/icon.ico';
	projector.patchWindowTitle = 'Tracker';
	projector.removeCodeSignature = true;
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

	await projector.withFile('projector/flashplayer_32.exe', 'swf/Tracker.swf');
	zipFile('output/windows/Tracker.exe', 'output/windows/Tracker_32.zip');
	
	fs.renameSync('output/windows/Tracker.exe', 'output/windows/Tracker_32.exe');

	await projector.withFile('projector/flashplayer_64.exe', 'swf/Tracker.swf');
	zipFile('output/windows/Tracker.exe', 'output/windows/Tracker.zip');
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
	projector.removeCodeSignature = true;

	await projector.withFile('projector/flashplayer_32_sa.dmg', 'swf/NotessimoV3_Standard.swf');

	zip('output/mac/NotessimoV3_Standard.app', 'output/mac/NotessimoV3_Standard.app.zip');
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
	projector.removeCodeSignature = true;

	await projector.withFile('projector/flashplayer_32_sa.dmg', 'swf/NotessimoV3_Legacy.swf');

	zip('output/mac/NotessimoV3_Legacy.app', 'output/mac/NotessimoV3_Legacy.app.zip');
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
	projector.removeCodeSignature = true;

	await projector.withFile('projector/flashplayer_32_sa.dmg', 'swf/NotessimoV2.swf');

	zip('output/mac/NotessimoV2.app', 'output/mac/NotessimoV2.app.zip');
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
	projector.removeCodeSignature = true;

	await projector.withFile('projector/flashplayer_32_sa.dmg', 'swf/NotessimoV1.swf');

	zip('output/mac/NotessimoV1.app', 'output/mac/NotessimoV1.app.zip');
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
	projector.removeCodeSignature = true;

	await projector.withFile('projector/flashplayer_32_sa.dmg', 'swf/Tracker.swf');
	
	zip('output/mac/Tracker.app', 'output/mac/Tracker.app.zip');
}

// Linux
const LinuxV3Standard = async () => {
	const projector = new ProjectorLinux64('output/linux/NotessimoV3_Standard');
	projector.patchWindowTitle = 'Notessimo V3';
	projector.patchMenuRemove = true;
	projector.patchProjectorPath = true;
	projector.patchProjectorOffset = true;

	await projector.withFile('projector/flash_player_sa_linux.x86_64.tar.gz', 'swf/NotessimoV3_Standard.swf');

	fs.chmodSync('output/linux/NotessimoV3_Standard', 0o755);
	tarFile('output/linux/NotessimoV3_Standard', 'output/linux/NotessimoV3_Standard.tar.gz');
}

const LinuxV3Legacy = async () => {
	const projector = new ProjectorLinux64('output/linux/NotessimoV3_Legacy');
	projector.patchWindowTitle = 'Notessimo V3';
	projector.patchMenuRemove = true;
	projector.patchProjectorPath = true;
	projector.patchProjectorOffset = true;

	await projector.withFile('projector/flash_player_sa_linux.x86_64.tar.gz', 'swf/NotessimoV3_Legacy.swf');

	fs.chmodSync('output/linux/NotessimoV3_Legacy', 0o755);
	tarFile('output/linux/NotessimoV3_Legacy', 'output/linux/NotessimoV3_Legacy.tar.gz');
}

const LinuxV2 = async () => {
	const projector = new ProjectorLinux64('output/linux/NotessimoV2');
	projector.patchWindowTitle = 'Notessimo V2';
	projector.patchMenuRemove = true;
	projector.patchProjectorPath = true;
	projector.patchProjectorOffset = true;

	await projector.withFile('projector/flash_player_sa_linux.x86_64.tar.gz', 'swf/NotessimoV2.swf');

	fs.chmodSync('output/linux/NotessimoV2', 0o755);
	tarFile('output/linux/NotessimoV2', 'output/linux/NotessimoV2.tar.gz');
}

const LinuxV1 = async () => {
	const projector = new ProjectorLinux64('output/linux/NotessimoV1');
	projector.patchWindowTitle = 'Notessimo V1';
	projector.patchMenuRemove = true;
	projector.patchProjectorPath = true;
	projector.patchProjectorOffset = true;

	await projector.withFile('projector/flash_player_sa_linux.x86_64.tar.gz', 'swf/NotessimoV1.swf');

	fs.chmodSync('output/linux/NotessimoV1', 0o755);
	tarFile('output/linux/NotessimoV1', 'output/linux/NotessimoV1.tar.gz');
}

const LinuxTracker = async () => {
	const projector = new ProjectorLinux64('output/linux/Tracker');
	projector.patchWindowTitle = 'Tracker';
	projector.patchMenuRemove = true;
	projector.patchProjectorPath = true;
	projector.patchProjectorOffset = true;

	await projector.withFile('projector/flash_player_sa_linux.x86_64.tar.gz', 'swf/Tracker.swf');

	fs.chmodSync('output/linux/Tracker', 0o755);
	tarFile('output/linux/Tracker', 'output/linux/Tracker.tar.gz');
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