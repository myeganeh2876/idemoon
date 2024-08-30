<?php

namespace App\Filament\Resources\ApparelLineResource\Pages;

use App\Filament\Resources\ApparelLineResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListApparelLines extends ListRecords
{
    protected static string $resource = ApparelLineResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
