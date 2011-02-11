package com.chariotsolutions.demo;

import com.phonegap.DroidGap;

import android.app.Activity;
import android.os.Bundle;

public class App extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.setIntegerProperty("splashscreen", R.drawable.splash); 
        super.loadUrl("file:///android_asset/www/index.html", 3000);
    }
}