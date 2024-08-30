<?php

namespace App\Filament\Resources\ApparelLineResource\Pages;

use App\Filament\Resources\ApparelLineResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditApparelLine extends EditRecord
{
    protected static string $resource = ApparelLineResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
