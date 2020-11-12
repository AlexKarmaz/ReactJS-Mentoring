import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import fs from 'fs';
import path from 'path';
import App from './App';
import createStore from './store/store.js';

const renderScriptSection = (preloadedState) =>
    `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(
        preloadedState
    ).replace(/</g, '\\u003c')}</script>`;

function renderHtml(html, store) {
    const data = fs.readFileSync(path.join('./dist', 'index.html'), 'utf8');
    return data.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>${renderScriptSection(store.getState())}`
    );
}

//PATTERN: Server Side Rendering
export default function serverRenderer() {
    return (req, res) => {
        const context = {};
        const store = createStore({});

        const renderRoot = () => (
            <App
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );

        renderToString(renderRoot());

        if (context.url) {
            res.writeHead(302, {
                Location: context.url,
            });
            res.end();
            return;
        }

        const html = renderToString(renderRoot());
        res.send(renderHtml(html, store));
    };
}
