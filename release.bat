@echo off

rm -r .\platforms\android\assets\www
mkdir .\platforms\android\assets\www
xcopy /e /y www .\platforms\android\assets\www

call .\platforms\android\cordova\build --release
"%JAVA_HOME%\bin\jarsigner" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore keystore .\platforms\android\bin\Malifaux-release-unsigned.apk "malifaux models"
"%ANDROID_HOME%\build-tools\android-4.4W\zipalign" -v -f 4 .\platforms\android\bin\Malifaux-release-unsigned.apk MalifauxModels.apk

echo .
echo Try the short pw.
echo !!! Remember to change platforms\Android\AndroidManifest.xml