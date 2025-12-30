# Satoshi Font Setup

To use the Satoshi font in this project, you need to download the font files and place them in this directory.

## Download Satoshi

1. Visit: https://www.fontshare.com/fonts/satoshi
2. Click "Download family"
3. Extract the downloaded ZIP file
4. Copy these files to this directory (`public/fonts/`):
   - `Satoshi-Variable.woff2`
   - `Satoshi-VariableItalic.woff2`

## File Structure

After downloading, your `public/fonts/` directory should contain:

```
public/fonts/
├── Satoshi-Variable.woff2
├── Satoshi-VariableItalic.woff2
└── README.md (this file)
```

## Alternative: Use Individual Font Files

If you prefer using individual weight files instead of variable fonts, download these files and update `app/layout.tsx` accordingly:

- Satoshi-Light.woff2 (300)
- Satoshi-Regular.woff2 (400)
- Satoshi-Medium.woff2 (500)
- Satoshi-Bold.woff2 (700)
- Satoshi-Black.woff2 (900)

## License

Satoshi is a free font from Fontshare. Make sure to review the license terms at https://www.fontshare.com/licenses
