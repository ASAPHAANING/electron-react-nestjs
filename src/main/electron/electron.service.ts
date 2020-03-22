import { Injectable, OnModuleInit } from '@nestjs/common';
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

@Injectable()
export class ElectronService implements OnModuleInit {
    onModuleInit(): any {
        app.whenReady().then(this.createWindow);
    }

    createWindow() {
        const mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
            },
        });

        // and load the index.html of the app.
        // win.loadFile('./index.html');
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, './index.html'),
                protocol: 'file:',
                slashes: true
            })
        );
    }
}
