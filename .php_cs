<?php
return PhpCsFixer\Config::create()
    ->setRules(array(
        '@PSR2' => true,
        'no_unused_imports' => true,
    ))
    ->setLineEnding("\n");
